import React, { useEffect, useState, useRef } from 'react';
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

export default function Messages({ theme, message, setHistory, id, loading, history, setLoading, setMessage, experimental }) {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const messagesContainerRef = useRef(null);
    const [displaySharing, setDisplaySharing] = useState(false);
    const [displayFeedback, setDisplayFeedback] = useState(false)
    const [feedbackRating, setFeedbackRating] = useState('')

    const handleFeedback = (rating) => {
        setDisplayFeedback(true)
        setFeedbackRating(rating)
    }

    useEffect(() => {
        const loadChat = async () => {
            const isShared = id.split('from').length > 1

            if (!isShared) {
                const result = await _loadMessages(setMessages, id, setHistory);
                if (result === 'back') {
                    navigate('/chats');
                }
            } else {
                const result = await _createSharedChat(id)
                if (result === 'back') {
                    setDisplaySharing(true)
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

    function LoadingEffect() {
        return (
            <div className="message wait">
                <div className="leftside">
                    <img src={logo} alt="logo of user" />
                </div>
                <div className="rightside">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="messages" ref={messagesContainerRef}>
            <ChatCreationTime chat={id} />
            {messages.map((message, index) => (
                <Message message={message} messagePath={id} key={index} history={history} setLoading={setLoading} setHistory={setHistory} handleFeedback={handleFeedback} theme={theme} />
            ))}
            {loading ? <LoadingEffect /> : null}
            {displaySharing && <SharingPopup setActivate={setDisplaySharing} uid={id.split('from')[1]} id={id} />}
            {!loading && displayFeedback ? <Opinion rating={feedbackRating} setDisplayFeedback={setDisplayFeedback} /> : null}
            {!loading && !displayFeedback && messages.length > 0 && !id.includes("c") && experimental ? <RegenerateAnswer message={messages[messages.length - 1]} history={history} setLoading={setLoading} setHistory={setHistory} /> : null}
        {experimental && <Suggestions message={message} history={history} setMessage={setMessage} />}
        </div>
    );
}
