import React from "react";
import presentation from "../../assets/images/presentation.png";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Your Intelligent Chatbot</h1>
                <p>
                    Take advantage of the new AI powered chatbot on the market
                </p>
                <div className="cta-buttons">
                    <Link to={"/chats"} className="try-free">Try For Free</Link>
                    {/* <button className="show-video">Show Video</button> */}
                </div>
            </div>
            <div className="hero-image">
                <img src={presentation} alt="showcase image" />
            </div>
        </section>
    );
}
