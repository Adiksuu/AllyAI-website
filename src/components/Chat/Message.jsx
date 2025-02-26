import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { database, auth } from '../../api/database/connect';
import { _formatMessageText } from "../../functions/_formatMessageText";
import { models } from "../../api/models/modelsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { _copyMessageText } from "../../functions/_copyMessageText";
import { _getSettings } from "../../functions/_getSettings";
import { _regenerateAnswer } from "../../functions/_regenerateAnswer";

export default function Message({ message, messagePath, history, setLoading, setHistory }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isBlobValid, setIsBlobValid] = useState(false);
    const [model] = useState(models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase())

    useEffect(() => {
        if (message?.file?.length > 0) {
            if (!message.file[0]) return
            const img = new Image();
            img.src = message.file[0];

            img.onload = () => setIsBlobValid(true);
            img.onerror = () => setIsBlobValid(false);
        } else {
            setIsBlobValid(false);
        }
    }, [message.file]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await _getSettings()
            const length = message.author === 'ai' ? data.length : 8192

            if (message.loading === true) {
                const words = message.text.split(" ").slice(0, length);
                const duration = 2000;
                const intervalTime = duration / words.length;
    
                let index = 0;
                setDisplayedText("");
    
                const interval = setInterval(() => {
                    const partialText = words.slice(0, index + 1).join(" ");
                    const formattedPartialText = _formatMessageText(partialText);
    
                    setDisplayedText(formattedPartialText);
                    index++;
                    if (index >= words.length) {
                        clearInterval(interval);
    
                        const model = models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase();
                        const path = `chats/${auth.currentUser.uid}/${model}/${messagePath}/${message.key}`;
                        database.ref(path).update({ loading: false });
                    }
                }, intervalTime);
    
                return () => clearInterval(interval);
            } else {
                const formattedText = _formatMessageText(message.text.slice(0, length));
                setDisplayedText(formattedText);
            }
        }
        fetchData()
    }, [message, messagePath]);

    return (
        <div className={`message${message?.author === "user" ? " author" : ""}${message?.invalid === true ? ' invalid' : ''}`}>
            <div className="leftside">
                <img src={logo} alt="logo of user" />
            </div>
            <div className="rightside">
                <div className="top">
                    {/* <div className="info">
                        <h2>{message.username}</h2>
                        <span>{message.date}</span>
                    </div> */}
                    {isBlobValid ? <div className="images">
                        {message.file.slice(0,4).map(f => <img src={f} alt="Message file" />)}
                        {message.file.length > 4 ? <div className="count">+{message.file.length - 4}</div> : null}
                    </div> : null}
                    {message.text.startsWith('data:image') ? (
                        <img src={message.text} alt="Embedded image" />
                    ) : (
                        <p style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: displayedText }}></p>
                    )}
                </div>
                <div className="bottom">
                    {model !== 'ALLY-IMAGINE' ? <button onClick={() => _regenerateAnswer(message, history, setLoading, setHistory)}><FontAwesomeIcon icon={faRefresh} /></button> : null}
                    <button onClick={() => _copyMessageText(message.text)}><FontAwesomeIcon icon={faCopy} /></button>
                </div>
            </div>
        </div>
    )
}