import React from "react";
import Navbar from "../components/Main/Navbar";
import Hero from "../components/Main/Hero";
import Pricing from "../components/Main/Pricing";
import About from "../components/Main/About";

export default function Main() {
    return (
        <div className="main">
            <Navbar />
            <Hero />
            <About />
            <Pricing />
        </div>
    );
}
