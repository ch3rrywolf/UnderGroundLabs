import React from 'react';

const Login = () => {
    return (
        <div className="container">
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
                    <button type="submit" className="btn btn-primary">Confirm identity</button>
            </form>
        </div>
    );
};

export default Login;