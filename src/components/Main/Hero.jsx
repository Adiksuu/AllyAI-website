import React, { useEffect, useState } from "react";
import presentation from "../../assets/images/presentation.png";
import { Link } from "react-router-dom";
import { _getUserSystem } from "../../functions/_getUserSystem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinux, faWindows } from "@fortawesome/free-brands-svg-icons";
import { _downloadApp } from "../../functions/_downloadApp";

export default function Hero() {
    const [os, setOs] = useState("windows");

    useEffect(() => {
        setOs(_getUserSystem())
    }, [])

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Your Intelligent Chatbot</h1>
                <p>
                    Take advantage of the new AI powered chatbot on the market
                </p>
                <div className="cta-buttons">
                    <Link to={"/chats"} className="try-free">Try For Free</Link>
                    {os === "Windows" || os === "Linux" ? <a onClick={() => _downloadApp(os)} className="download">Download for {os} <FontAwesomeIcon icon={os === 'Windows' ? faWindows : faLinux} /></a> : null}
                </div>
            </div>
            <div className="hero-image">
                <img src={presentation} alt="showcase image" loading="lazy"  />
            </div>
        </section>
    );
}
