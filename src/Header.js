import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <h3 className="header-title">Wishify</h3>
                <ul className="nav-links">
                    <Link to="/" className="links">
                    <li>Home</li>
                    </Link>
                    <Link to="/create" className="links">
                    <li>Create</li>
                    </Link>
                    <Link to="/lists" className="links">
                    <li>Lists</li>
                    </Link>
                </ul>
        </div>
    )
}

export default Header
