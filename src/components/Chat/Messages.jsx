import React, { useEffect, useState, useRef } from 'react';
import Message from './Message';
import { _loadMessages } from '../../functions/_loadMessages';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

export default function Messages({ setHistory, id, loading, history, setLoading }) {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const messagesContainerRef = useRef(null);

    useEffect(() => {
        const loadChat = async () => {
            const result = await _loadMessages(setMessages, id, setHistory);
            if (result === 'back') {
                navigate('/');
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
            </div>
        );
    }

    return (
        <div className="messages" ref={messagesContainerRef}>
            {messages.map((message, index) => (
                <Message message={message} messagePath={id} key={index} history={history} setLoading={setLoading} setHistory={setHistory} />
            ))}
            {loading ? <LoadingEffect /> : null}
        </div>
    );
}
