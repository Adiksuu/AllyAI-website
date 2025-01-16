import React, { useEffect, useState, useRef } from 'react';
import Message from './Message';
import { _loadMessages } from '../../functions/_loadMessages';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import Opinion from './Opinion';
import { models } from '../../api/models/modelsList';
import { _getPrompts } from '../../functions/_maxPrompts';
import Suggestions from './Suggestions';
import { _createSharedChat } from '../../functions/_handleShare';
import SharingPopup from './SharingPopup';

export default function Messages({ message, setHistory, id, loading, history, setLoading, setMessage, experimental }) {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const messagesContainerRef = useRef(null);
    const [prompts, setPrompts] = useState(0)
    const model = models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase();
    const [displaySharing, setDisplaySharing] = useState(false);

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
        const loadPrompts = async () => {
            setPrompts(await _getPrompts(model.toUpperCase()));
        };
        loadPrompts();
    }, [history]);

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
            {messages.map((message, index) => (
                <Message message={message} messagePath={id} key={index} history={history} setLoading={setLoading} setHistory={setHistory} />
            ))}
            {loading ? <LoadingEffect /> : null}
            {displaySharing && <SharingPopup setActivate={setDisplaySharing} uid={id.split('from')[1]} id={id} />}
            {!loading && prompts > 0 && prompts % 5 === 0 ? <Opinion /> : null}
        {experimental && <Suggestions message={message} history={history} setMessage={setMessage} />}
        </div>
    );
}
