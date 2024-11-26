import React, { useEffect, useState } from "react";
import Model from "../components/Models/Model";
import { models } from "../api/models/modelsList";
import { _getPromptsCount } from "../functions/_getPromptsCount";

export default function Models() {
    const [prompts, setPrompts] = useState({
        'ALLY-2': 0,
        'ALLY-LIE': 0,
        'ALLY-IMAGINE': 0,
    })

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPromptsCount());
        };
        loadPrompts()
    }, [])

    return (
        <section className="models">
            <div className="info">
                <h1>Try our models</h1>
                <p>AllyAI offers several language models, try them all!</p>
            </div>
            <div className="container">
                {models.map((model, index) => <Model model={model} key={index} prompts={prompts} />)}
            </div>
        </section>
    );
}
