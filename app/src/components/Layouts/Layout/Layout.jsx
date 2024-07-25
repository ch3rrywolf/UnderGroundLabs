import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                { children }

            </div>
        </div>
    );
}

export default Layout;