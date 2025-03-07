import React, { useEffect, useState } from 'react'
import HomeInput from '../components/Home/HomeInput'
import Examples from '../components/Home/Examples'
import ModelSelecting from '../components/Home/ModelSelecting'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { _getSettings } from '../functions/_getSettings';
import NewFeatures from '../components/Home/NewFeatures';
import { _checkUserAccount } from '../functions/_upgradeAccount';
import Sidebar from '../components/Sidebar/Sidebar';
import Changelog from '../components/Home/Changelog';
import { _getThemeByName, themes } from '../api/other/themes';
import { _getUserTheme } from '../functions/_getUserTheme';

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [model, setModel] = useState(location.state?.model || 'Ally-2')
    const { id } = useParams();
    const [experimental, setExperimental] = useState(true);
    const [isPremium, setIsPremium] = useState(false);
    const [theme, setTheme] = useState(themes[0])

    useEffect(() => {
        const loadTheme = async () => {
            const theme = await _getUserTheme()
            setTheme(_getThemeByName(theme))
        }
        loadTheme()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            const data = await _checkUserAccount();
            setIsPremium(data);
        };
        fetch();
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const data = await _getSettings()
            setExperimental(data.experimental)
        }
        fetch();
        navigate(`/chats`, { replace: true, state: null });
    }, [navigate, id]);

    return (
        <>
            <Sidebar />
            <section className="home">
                <NewFeatures isPremium={isPremium} experimental={experimental} theme={theme} />
                <Examples model={model} theme={theme} />
                <div className="container" style={{ '--theme-color': theme.color }}>
                    <h1>How can I help you?</h1>
                    <p>Ask what you want and you will receive a quick and concise answer</p>
                    <HomeInput model={model} />
                    <ModelSelecting model={model} setModel={setModel} theme={theme} />
                </div>
                <Changelog />
            </section>
        </>
    )
}
