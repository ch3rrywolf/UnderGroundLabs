import axios from "axios";

class AuthService{

    url = process.env.REACT_APP_API_URL;
    configMultipartData = {
        headers:{
            'Contenet-Type': 'multipart/form-data'
        }

    }

    register(formData){
        return axios.post(this.url+'register', formData, this.configMultipartData);
    }
}

export default new AuthService();