import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { database, auth } from '../../api/database/connect';

export default function Message({ message, messagePath }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (message.loading === true) {
            const words = message.text.split(" ");
            let index = 0;
            setDisplayedText("");

            const interval = setInterval(() => {
                setDisplayedText((prev) =>
                    (prev + (index > 0 ? " " : "") + words[index])
                );
                index++;
                if (index >= words.length) {
                    clearInterval(interval);

                    const model = "ALLY-2";
                    const path = `chats/${auth.currentUser.uid}/${model}/${messagePath}/${message.key}`;
                    database.ref(path).update({ loading: false });
                }
            }, 50);

            return () => clearInterval(interval);
        } else {
            // Zamiana kropki + spacja na nową linię i pogrubianie tekstu
            const formattedText = formatMessageText(message.text);
            setDisplayedText(formattedText);
        }
    }, [message, messagePath]);

    // Funkcja do formatowania tekstu (zamiana `**text**` na <strong>text</strong>)
    const formatMessageText = (text) => {
        // Zamiana kropka + dokładnie jedna spacja na nową linię
        const replacedText = text.replace(/\.  (?=\S)/g, ".\n");
        // Zamiana `**tekst**` na <strong>tekst</strong>
        return replacedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    };

    return (
        <div className={`message${message?.author === "user" ? " author" : ""}`}>
            <div className="leftside">
                <img src={logo} alt="logo of user" />
            </div>
            <div className="rightside">
                <div className="info">
                    <h2>{message.username}</h2>
                    <span>{message.date}</span>
                </div>
                {/* Wykorzystanie dangerouslySetInnerHTML do wyrenderowania HTML */}
                <p style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: displayedText }}></p>
            </div>
        </div>
    );
}
