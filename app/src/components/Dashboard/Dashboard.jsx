import React, { useEffect, useState, useRef } from "react";
import Layout from "../Layouts/Layout/Layout";
import AuthService from "../../services/AuthService";
import './Dashboard.css';

const Dashboard = () => {

    const userData = AuthService.getUserData();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors ] = useState({});

    const fileInputRef = useRef(null);

    const refreshData = () => {
        const userData = AuthService.getUserData();

        setName(userData.name)
        setEmail(userData.email)
        setMobile(userData.mobile)
        setImage(null)
        setImageUrl(process.env.REACT_APP_BE_URL + '' + userData.image)

        if(fileInputRef.current){
            fileInputRef.current.value = '';
        }
    }

    useEffect(() => {
        refreshData();
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});

        const formData = new FormData();
        formData.append('name', name);
        formData.append('mobile', mobile);
        if(image){
            formData.append('image', image);
        }
        
        try{
            const response = await AuthService.updateUserData(formData);
            const data = response.data;
            if(data.success){
                alert(data.msg);
                AuthService.setUserData(data.user);
                refreshData();
            
            } else{
                alert(data.msg);
            }

        } catch(error){
            
            if(error.response && (error.response.status === 400 || error.response.status === 401)){

                if(error.response.data.errors){
                    const apiErrors = error.response.data.errors;
                    const newErrors = {};
                    apiErrors.forEach((apiError) => {
                        newErrors[apiError.path] = apiError.msg;
                    });

                    setErrors(newErrors);

                } else{
                    alert(error.response.data.msg?error.response.data.msg:error.message);
                }

            } else{
                alert(error.message);
            }
        }

    };

    return (
        <Layout>
            <div className='mt-2'>
                <div className='userImage'>
                    <img src={imageUrl} alt={imageUrl} height={150} />
                </div>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Enter name</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                    />
                    {errors.name && <div className='errorMessage'>{errors.name}</div>}
                </div>
                <div className="form-group">
                    <label >Photo Profile</label>
                    <input 
                        type="file"
                        className="form-control"
                        ref={fileInputRef}
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    {errors.image && <div className='errorMessage'>{errors.image}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                        disabled 
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                    />
                    {errors.email && <div className='errorMessage'>{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Enter Mobile Number</label>
                    <input 
                        type="number"
                        className="form-control"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter Mobile Number "
                    />
                    {errors.mobile && <div className='errorMessage'>{errors.mobile}</div>}

                </div>
                    <button type="submit" className="btn btn-primary mt-2">Update Profile</button>
                </form>
            </div>
        </Layout>
    );
}

export default Dashboard;