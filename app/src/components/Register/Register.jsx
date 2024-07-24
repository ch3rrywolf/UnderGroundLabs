import React from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container">
            <h1>Register</h1>
            <form >
                <div className="form-group">
                    <label >Enter name</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="form-group">
                    <label >Photo Profile</label>
                    <input 
                        type="file"
                        className="form-control"
                        placeholder="import image"
                    />
                </div>
                <div className="form-group">
                    <label >Enter Mobile Number</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile Number "
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        placeholder="email@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                    <button type="submit" className="btn btn-primary mt-2">Confirm identity</button>
            </form>
            <p>
                You have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;