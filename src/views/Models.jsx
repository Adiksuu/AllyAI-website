import React, { useEffect, useState } from "react";
import Model from "../components/Models/Model";
import { models } from "../api/models/modelsList";
import { _getPromptsCount } from "../functions/_getPromptsCount";
import { _checkUserAccount } from "../functions/_upgradeAccount";
import Sidebar from "../components/Sidebar/Sidebar";
import { _getSettings } from "../functions/_getSettings";

export default function Models() {
    const [prompts, setPrompts] = useState({
        "ALLY-2": 0,
        "ALLY-LIE": 0,
        "ALLY-IMAGINE": 0,
    });
    const [isPremium, setIsPremium] = useState(false);
    const [experimental, setExperimental] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const data = await _checkUserAccount();
            setIsPremium(data);

            const dataExperimental = await _getSettings();
            setExperimental(dataExperimental.experimental);
        };
        fetch();
    }, []);

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPromptsCount());
        };
        loadPrompts();
    }, []);

    return (
        <>
            <Sidebar />
            <section className="models">
                <div className="info">
                    <h1>Try our models</h1>
                    <p>AllyAI offers several language models, try them all!</p>
                </div>
                <div className="container">
                    {models.map(
                        (model, index) =>
                            (!model.experimental ||
                                model.experimental === experimental) && (
                                <Model
                                    model={model}
                                    key={index}
                                    prompts={prompts}
                                    isPremium={isPremium}
                                />
                            )
                    )}
                </div>
            </section>
        </>
    );
}
