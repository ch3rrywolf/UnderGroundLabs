import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar';
import AuthService from "../../../services/AuthService";

const Navbar = () => {

    const navigate = useNavigate();

    const logOutUser = async() => {
        await AuthService.logoutUser();
        navigate('/login', { replace:true });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={logOutUser}>Logout</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;