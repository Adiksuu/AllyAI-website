import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faDivide, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Models() {
    const models = [
        {
            name: "Ally-2",
            description: "Advanced language model, suitable for everyday use",
            icon: faMessage
        },
        {
            name: "Ally-Math",
            description: "A language model used only to solve simple mathematical operations",
            icon: faDivide
        },
        {
            name: "Ally-Games",
            description: "Currently unavailable for use",
            icon: faGamepad,
            disabled: true
        }
    ]

    function Model({ model }) {
        return (
            <div className={`model${model?.disabled ? ' disabled' : ''}`}>
                <div className="leftside">
                    <span>
                        <FontAwesomeIcon icon={model.icon} />
                    </span>
                </div>
                <div className="rightside">
                    <h2>{model.name}</h2>
                    <p>{model.description}</p>
                </div>
            </div>
        );
    }

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
