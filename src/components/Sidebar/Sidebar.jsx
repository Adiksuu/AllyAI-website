import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import SearchBar from './SearchBar';
import OtherButtons from './OtherButtons';
import CreateChat from './CreateChat';
import { _loadSidebarChats } from '../../functions/_loadSidebarChats';
import FloatingChatsList from './FloatingChatsList';

export default function Sidebar() {
    const [chatsList, setChatsList] = useState([]);
    const [searching, setSearching] = useState('');
    const [activate, setActivate] = useState(false)

    useEffect(() => {
        setChatsList([])
        _loadSidebarChats(chatsList, setChatsList)
    }, [activate]);

    return (
        <div className="sidebar">
            <div className="top">
                <div>
                    <img src={logo} alt="logo of app" />
                    <h1>AllyAI</h1>
                </div>
            </div>
            <SearchBar searching={searching} setSearching={setSearching} setActivate={setActivate} />
            {activate ? <FloatingChatsList searching={searching} chatsList={chatsList} setActivate={setActivate} /> : null}
            <OtherButtons />
            <CreateChat />
        </div>
    );
}
