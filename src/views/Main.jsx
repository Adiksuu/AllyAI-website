import React from "react";
import Navbar from "../components/Main/Navbar";
import Hero from "../components/Main/Hero";
import Pricing from "../components/Main/Pricing";
import About from "../components/Main/About";
import Faq from "../components/Main/Faq";

export default function Main() {
    return (
        <div className="main">
            <Navbar />
            <Hero />
            <About />
            <Pricing />
            <Faq />
        </div>
    );
}
