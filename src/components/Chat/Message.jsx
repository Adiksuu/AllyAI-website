import React, { useState, useEffect } from "react";
import { database, auth } from '../../api/database/connect';
import { models } from "../../api/models/modelsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faFileWord, faRefresh, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { _copyMessageText } from "../../functions/_copyMessageText";
import { _getSettings } from "../../functions/_getSettings";
import { _regenerateAnswer } from "../../functions/_regenerateAnswer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { _generateWordDocument } from "../../functions/_generateWordDocument";
import MessageTools from "./MessageTools";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Message({ message, messagePath, history, setLoading, setHistory, handleFeedback, theme }) {
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
            const data = await _getSettings();
            const length = message.author === 'ai' ? data.length : 8192;
    
            if (message.loading === true) {
                const words = message.text.split(" ").slice(0, length);
                const duration = 2000;
                const intervalTime = duration / words.length;
    
                let index = 0;
                setDisplayedText("");
    
                const interval = setInterval(() => {
                    const partialText = words.slice(0, index + 1).join(" ");
                    setDisplayedText(partialText);
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
                setDisplayedText(message.text.slice(0, length));
            }
        }
        fetchData()
    }, [message, messagePath]);

    return (
        <div className={`message${message?.author === "user" ? " author" : ""}${message?.invalid === true ? ' invalid' : ''}${message.text.startsWith('data:image') ? ' image' : ''}`}>
            <div className="leftside">
                <img src={theme.logo} alt="logo of user" />
            </div>
            <div className="rightside">
                <div className="top">
                    {isBlobValid ? (
                        <div className="images">
                            {message.file.slice(0, 4).map((f, index) => (
                                <img key={index} src={f} alt="Message file" />
                            ))}
                            {message.file.length > 4 ? (
                                <div className="count">+{message.file.length - 4}</div>
                            ) : null}
                        </div>
                    ) : null}

                    {message.text.startsWith('data:image') ? (
                        <img src={message.text} alt="Embedded image" />
                    ) : message?.author === 'user' ? <div className="message-content"><p style={{whiteSpace: 'pre-line'}}>{displayedText}</p></div> : (
                        <div className="message-content">
                            <ReactMarkdown
                                children={displayedText}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({ node, inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || "");
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={atomDark}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, "")}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>{children}</code>
                                        );
                                    },
                                }}
                            />
                        </div>
                    )}
                </div>
                <div className="bottom">
                    <div className="rating">
                        <button onClick={() => _copyMessageText(message.text)}>
                            <FontAwesomeIcon icon={faCopy} />
                        </button>
                        {model !== 'ALLY-IMAGINE' ? (
                            <>
                                <MessageTools message={message} />
                            </>
                        ) : null}
                    </div>
                    <div className="rating">
                        <button onClick={() => handleFeedback('like')}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                        <button onClick={() => handleFeedback('dislike')}>
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
