import React, { useState, useEffect, useMemo, useCallback } from "react";
import { models } from "../../api/models/modelsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { _copyMessageText } from "../../functions/_copyMessageText";
import { _getSettings } from "../../functions/_getSettings";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MessageTools from "./MessageTools";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Message = React.memo(({ message, messagePath, handleFeedback, theme }) => {
    const modelName = useMemo(() => {
        const model = models.find(a => a.symbole === window.location.pathname.at(6));
        return model ? model.name.toUpperCase() : '';
    }, []);

    const [isBlobValid, setIsBlobValid] = useState(false);
    const [displayedText, setDisplayedText] = useState("");

    // Memoizacja wartości message.file
    const messageFile = useMemo(() => message?.file, [message?.file]);

    useEffect(() => {
        if (messageFile?.length > 0) {
            if (!messageFile[0]) return;
            const img = new Image();
            img.src = messageFile[0];

            img.onload = () => setIsBlobValid(true);
            img.onerror = () => setIsBlobValid(false);
        } else {
            setIsBlobValid(false);
        }
    }, [messageFile]);

    // Memoizacja zawartości ReactMarkdown
    const markdownContent = useMemo(() => {
        return (
            <ReactMarkdown
                children={message.text} // Używaj message.text zamiast displayedText
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
        );
    }, [message.text]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await _getSettings();
            const length = message.author === 'ai' ? data.length : 8192;

            setDisplayedText(message.text.slice(0, length));
        }
        fetchData()
    }, [message, messagePath]);

    const handleCopy = useCallback(() => {
        _copyMessageText(message.text);
    }, [message.text]);

    const handleLike = useCallback(() => {
        handleFeedback('like');
    }, [handleFeedback]);

    const handleDislike = useCallback(() => {
        handleFeedback('dislike');
    }, [handleFeedback]);

    return (
        <div className={`message${message?.author === "user" ? " author" : ""}${message?.invalid === true ? ' invalid' : ''}${message.text.startsWith('data:image') ? ' image' : ''}`}>
            <div className="leftside">
                <img src={theme.logo} alt="logo of user" loading="lazy"  />
            </div>
            <div className="rightside">
                <div className="top">
                    {isBlobValid ? (
                        <div className="images">
                            {messageFile.slice(0, 4).map((f, index) => (
                                <img key={index} src={f} alt="Message file" loading="lazy" />
                            ))}
                            {messageFile.length > 4 ? (
                                <div className="count">+{messageFile.length - 4}</div>
                            ) : null}
                        </div>
                    ) : null}

                    {message.text.startsWith('data:image') ? (
                        <img src={message.text} alt="Embedded image" loading="lazy" />
                    ) : message?.author === 'user' ? <div className="message-content"><p style={{ whiteSpace: 'pre-line' }}>{displayedText}</p></div> : (
                        <div className="message-content">
                            {markdownContent}
                        </div>
                    )}
                </div>
                <div className="bottom">
                    <div className="rating">
                        <button onClick={handleCopy}>
                            <FontAwesomeIcon icon={faCopy} />
                        </button>
                        {modelName !== 'ALLY-IMAGINE' ? (
                            <>
                                <MessageTools message={message} />
                            </>
                        ) : null}
                    </div>
                    <div className="rating">
                        <button onClick={handleLike}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                        <button onClick={handleDislike}>
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Message;