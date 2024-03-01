import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-logo">
                    Pet Haven
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                    <Link to="/about" className="navbar-link">
                        About
                    </Link>
                    <Link to="/funcat" className="navbar-link">
                        Cat Adoption
                    </Link>
                    <Link to="/fundog" className="navbar-link">
                        Dog Adoption
                    </Link>
                    <Link to="/register" className="navbar-link">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
