import React, { useEffect, useState } from "react";
import Model from "../components/Models/Model";
import { models } from "../api/models/modelsList";
import { _getPromptsCount } from "../functions/_getPromptsCount";
import { _checkUserAccount } from "../functions/_upgradeAccount";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Models() {
    const [prompts, setPrompts] = useState({
        'ALLY-2': 0,
        'ALLY-LIE': 0,
        'ALLY-IMAGINE': 0,
    })
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const data = await _checkUserAccount();
            setIsPremium(data);
        };
        fetch();
    }, []);

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPromptsCount());
        };
        loadPrompts()
    }, [])

    return (
        <>
            <Sidebar />
            <section className="models">
                <div className="info">
                    <h1>Try our models</h1>
                    <p>AllyAI offers several language models, try them all!</p>
                </div>
                <div className="container">
                    {models.map((model, index) => <Model model={model} key={index} prompts={prompts} isPremium={isPremium} />)}
                </div>
            </section>
        </>
    );
}
