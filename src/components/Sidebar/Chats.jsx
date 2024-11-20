import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Chats({ searching, chatsList }) {
    const navigate = useNavigate();

    const openChat = (chat) => {
        navigate(`/chat/${chat.path}`, { state: { loading: false, model: chat.model } })
    }

    function Chat({ chat }) {
        return (
            <div className="chat" onClick={() => openChat(chat)}>
                <p>{chat.firstMessage}</p>
            </div>
        );
    }

    return (
        <div className="chatsList">
            {chatsList
                .filter(chat =>
                    chat.firstMessage.toLowerCase().includes(searching.trim().toLowerCase())
                )
                .slice(0, 5)
                .map((chat, index) => <Chat chat={chat} key={index} />)}
        </div>
    );
}
