import React, { useState } from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async(event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('password', password);
        formData.append('image', image);

        try{
            const response = await AuthService.register(formData);
            const data = response.data;
            console.log(data);
            alert(data.msg);
            if(data.success){
                navigate('/login', { replace:true });
            }

        } catch(error){
            alert("There was an error registering! " + error.message);
        }

    };

    return (
        <div className="container">
            <h1>Register</h1>
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
                </div>
                <div className="form-group">
                    <label >Photo Profile</label>
                    <input 
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
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
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                    <button type="submit" className="btn btn-primary mt-2">Register</button>
            </form>
            <p className='mt-2'>
                You have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;