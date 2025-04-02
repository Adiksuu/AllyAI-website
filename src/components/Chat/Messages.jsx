import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import Message from './Message';
import { _loadMessages } from '../../functions/_loadMessages';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import Opinion from './Opinion';
import Suggestions from './Suggestions';
import { _createSharedChat } from '../../functions/_handleShare';
import SharingPopup from './SharingPopup';
import ChatCreationTime from './ChatCreationTime';
import RegenerateAnswer from './RegenerateAnswer';

const Messages = React.memo(({ theme, message, setHistory, id, loading, history, setLoading, setMessage, experimental }) => {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const messagesContainerRef = useRef(null);
    const [displaySharing, setDisplaySharing] = useState(false);
    const [displayFeedback, setDisplayFeedback] = useState(false);
    const [feedbackRating, setFeedbackRating] = useState('');

    const handleFeedback = useCallback((rating) => {
        setDisplayFeedback(true);
        setFeedbackRating(rating);
    }, []);

    useEffect(() => {
        const loadChat = async () => {
            const isShared = id.split('from').length > 1;

            if (!isShared) {
                const result = await _loadMessages(setMessages, id, setHistory);
                if (result === 'back') {
                    navigate('/chats');
                }
            } else {
                const result = await _createSharedChat(id);
                if (result === 'back') {
                    setDisplaySharing(true);
                } else if (result === 'error') {
                    navigate('/chats');
                }
            }
        };
        loadChat();
    }, [id, navigate, setHistory]);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages]);

    const LoadingEffect = useCallback(() => {
        return (
            <div className="message wait">
                <div className="leftside">
                    <img src={logo} alt="logo of user" loading="lazy" />
                </div>
                <div className="rightside">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }, []);

    // Memoizacja warunku dla RegenerateAnswer
    const shouldRenderRegenerateAnswer = useMemo(() => {
        return !loading && !displayFeedback && messages.length > 0 && !id.includes("c") && experimental;
    }, [loading, displayFeedback, messages.length, id, experimental]);

    return (
        <div className="messages" ref={messagesContainerRef}>
            <ChatCreationTime chat={id} />
            {messages.map((message, index) => (
                <Message
                    message={message}
                    messagePath={id}
                    key={index}
                    handleFeedback={handleFeedback}
                    theme={theme}
                />
            ))}
            {loading ? <LoadingEffect /> : null}
            {displaySharing && <SharingPopup setActivate={setDisplaySharing} uid={id.split('from')[1]} id={id} />}
            {!loading && displayFeedback ? <Opinion rating={feedbackRating} setDisplayFeedback={setDisplayFeedback} /> : null}
            {shouldRenderRegenerateAnswer ? (
                <RegenerateAnswer
                    message={messages[messages.length - 1]}
                    history={history}
                    setLoading={setLoading}
                    setHistory={setHistory}
                />
            ) : null}
            {experimental && <Suggestions message={message} history={history} setMessage={setMessage} />}
        </div>
    );
});

export default Messages;