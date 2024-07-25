import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default Navbar;