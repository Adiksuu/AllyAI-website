import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import SearchBar from './SearchBar';
import OtherButtons from './OtherButtons';
import CreateChat from './CreateChat';
import Chats from './Chats';
import { _loadSidebarChats } from '../../functions/_loadSidebarChats';

export default function Sidebar() {
    const [chatsList, setChatsList] = useState([]);
    const [searching, setSearching] = useState('');

    useEffect(() => {
        setChatsList([])
        _loadSidebarChats(chatsList, setChatsList)
    }, []);

    return (
        <div className="sidebar">
            <div className="top">
                <div>
                    <img src={logo} alt="logo of app" />
                    <h1>AllyAI</h1>
                </div>
            </div>
            <SearchBar searching={searching} setSearching={setSearching} />
            <Chats searching={searching} chatsList={chatsList} />
            <OtherButtons />
            <CreateChat />
        </div>
    );
}
