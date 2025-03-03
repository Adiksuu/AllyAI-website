import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>AllyAI</h2>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#pricing">Pricing</a>
                <a href="#faq">Faq</a>
                <Link to={"/chats"} className="sign-in">Get Started</Link>
            </div>
        </nav>
    );
}
