import axios from "axios";

class AuthService{

    url = process.env.REACT_APP_API_URL;
    configMultipartData = {
        headers:{
            'Content-Type': 'multipart/form-data'
        }

    }

    configJsonData = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    constructor()
    {
        this.axiosInstance = axios.create();
        this.axiosInstance.interceptors.response.use(
            response => response,
            async error => {
                const originalRequest = error.config;
                if(error.response.status === 401 && !originalRequest._retry){
                    originalRequest._retry = true;
                    try{

                        await this.refreshToken();
                        const newAccessToken = localStorage.getItem('accessToken');
                        originalRequest.headers['Authorization'] = 'Bearer '+newAccessToken;
                        return this.axiosInstance(originalRequest);
                        //console.log('Refresh Token still not expired!');

                    } catch(e){

                        this.logoutUser();
                        window.location.href = '/login';
                        return Promise.reject(e);
                        //console.log('Refresh Token expired!');
                    }
                }
            }
        );
    }

    async refreshToken()
    {
        const storedRefreshToken = localStorage.getItem('refreshToken');
        const authorizationHeader = {
            headers:{
                'Authorization':'Bearer '+storedRefreshToken
            }
        }
        const response = await axios.get(this.url+'refresh-token', authorizationHeader);
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
    }

    register(formData){
        return axios.post(this.url+'register', formData, this.configMultipartData);
    }

    login(formData){
        return axios.post(this.url+'login', formData, this.configJsonData);
    }

    frogotPassword(formData){
        return axios.post(this.url+'forgot-password', formData, this.configJsonData);
    }

    loginUser(data){
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("tokenType", data.tokenType);
        localStorage.setItem("user", JSON.stringify(data.user));
    }

    logoutUser()
    {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('tokenType');
        localStorage.removeItem('user');
    }

    isLoggedIn()
    {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    getUserData()
    {
        return JSON.parse(localStorage.getItem('user'));
    }

    updateUserData(formData) {
        const authorizationHeader = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }
        return this.axiosInstance.post(this.url + 'update-profile', formData, authorizationHeader);
    }

    setUserData(userData)
    {
        localStorage.setItem("user", JSON.stringify(userData));
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();