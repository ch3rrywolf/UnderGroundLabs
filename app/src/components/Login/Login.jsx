import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <form >
                <div className="foem-group">
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
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default Login;