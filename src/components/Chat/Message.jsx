import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { database, auth } from '../../api/database/connect';
import { _formatMessageText } from "../../functions/_formatMessageText";

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
            const formattedText = _formatMessageText(message.text);
            setDisplayedText(formattedText);
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
                <p style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: displayedText }}></p>
            </div>
        </div>
    );
}
