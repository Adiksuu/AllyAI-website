import React from "react";
import Model from "../components/Models/Model";
import { models } from "../api/models/modelsList";

export default function Models() {
    return (
        <section className="models">
            <div className="info">
                <h1>Try our models</h1>
                <p>AllyAI offers several language models, try them all!</p>
            </div>
            <div className="container">
                {models.map((model, index) => <Model model={model} key={index} />)}
            </div>
        </section>
    );
}
