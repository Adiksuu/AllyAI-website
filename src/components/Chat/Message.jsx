import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { database, auth } from '../../api/database/connect'

export default function Message({ message, messagePath }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (message.loading === true) {
            const words = message.text.split(" ");
            let index = 0
            setDisplayedText("");

            const interval = setInterval(() => {
                setDisplayedText((prev) => prev + (index > 0 ? " " : "") + words[index]);
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
            setDisplayedText(message.text);
        }
    }, [message, messagePath]);

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
                {/* Wyświetlanie animowanego tekstu jeśli loading = true */}
                <p>{displayedText}</p>
            </div>
        </div>
    );
}
