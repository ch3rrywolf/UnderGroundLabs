import React, { useState } from "react";
import Layout from "../Layouts/Layout/Layout";
import AuthService from "../../services/AuthService";
import './Dashboard.css';

const Dashboard = () => {

    const userData = AuthService.getUserData();

    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [mobile, setMobile] = useState(userData.mobile);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(process.env.REACT_APP_BE_URL+''+userData.image);
    const [errors, setErrors ] = useState({});


    const handleSubmit = async (event) => {

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
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    {errors.image && <div className='errorMessage'>{errors.image}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input 
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