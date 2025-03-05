import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggled, setToggled] = useState(false)

    return (
        <nav className={`navbar${toggled ? " toggled" : ""}`}>
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
            <div className="mobile">
                <button onClick={() => setToggled(!toggled)} ><FontAwesomeIcon icon={faBars} /></button>
            </div>
        </nav>
    );
}
