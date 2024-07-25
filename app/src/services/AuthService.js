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
}

export default new AuthService();