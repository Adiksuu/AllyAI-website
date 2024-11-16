import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faDivide, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Model from "../components/Models/Model";

export default function Models() {
    const models = [
        {
            name: "Ally-2",
            description: "Advanced language model, suitable for everyday use",
            icon: faMessage
        },
        {
            name: "Ally-Math",
            description: "Currently unavailable for use",
            icon: faDivide,
            disabled: true
        },
        {
            name: "Ally-Games",
            description: "Currently unavailable for use",
            icon: faGamepad,
            disabled: true
        }
    ]

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
