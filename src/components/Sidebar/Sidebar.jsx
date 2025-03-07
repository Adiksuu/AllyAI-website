import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import SearchBar from './SearchBar';
import OtherButtons from './OtherButtons';
import CreateChat from './CreateChat';
import { _loadSidebarChats } from '../../functions/_loadSidebarChats';
import FloatingChatsList from './FloatingChatsList';
import { _getThemeByName, themes } from '../../api/other/themes';
import { _getUserTheme } from '../../functions/_getUserTheme';

export default function Sidebar() {
    const [chatsList, setChatsList] = useState([]);
    const [searching, setSearching] = useState('');
    const [activate, setActivate] = useState(false)
    const [theme, setTheme] = useState(themes[0])

    useEffect(() => {
        const loadTheme = async () => {
            const theme = await _getUserTheme()
            setTheme(_getThemeByName(theme))
        }
        loadTheme()
    }, [])

    useEffect(() => {
        setChatsList([])
        _loadSidebarChats(chatsList, setChatsList)
    }, [activate]);

    return (
        <div className="sidebar" style={{ '--theme-color': theme.color }}>
            <div className="top">
                <div>
                    <img src={theme.logo} alt="logo of app" />
                    <h1>AllyAI</h1>
                </div>
            </div>
            <SearchBar searching={searching} setSearching={setSearching} setActivate={setActivate} />
            {activate ? <FloatingChatsList searching={searching} setSearching={setSearching} chatsList={chatsList} setActivate={setActivate} /> : null}
            <OtherButtons setActivate={setActivate} />
            <CreateChat theme={theme} />
        </div>
    );
}
