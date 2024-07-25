import axios from "axios";

class AuthService{

    url = process.env.REACT_APP_API_URL;
    configMultipartData = {
        headers:{
            'Contenet-Type': 'multipart/form-data'
        }

    }

    configJsonData = {
        headers:{
            'Content-Type': 'application/json'
        }

    }

    register(formData){
        return axios.post(this.url+'register', formData, this.configMultipartData);
    }

    login(formData){
        return axios.post(this.url+'login', formData, this.configJsonData);
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

    updateUserData(formData)
    {
        const authorizationHeader = {
            headers:{
                'Authorization':'Bearer '+localStorage.getItem('accessToken')
            }
        }
        return axios.post(this.url+'update-profile', formData, authorizationHeader);
    }

    setUserData(userData)
    {
        localStorage.setItem("user", JSON.stringify(userData));
    }
}

export default new AuthService();