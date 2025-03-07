import { useEffect, useState } from "react";
import OutputSettings from "../components/Settings/OutputSettings";
import SettingsSelecting from "../components/Settings/SettingsSelecting";
import UserSettings from "../components/Settings/UserSettings";
import ExperimentalSettings from "../components/Settings/ExperimentalSettings";
import { _checkUserAccount } from "../functions/_upgradeAccount";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { _getThemeByName, themes } from "../api/other/themes";
import { _getUserTheme } from "../functions/_getUserTheme";

export default function Settings() {
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedTab, setSelectedTab] = useState(location.state?.category || "User settings");
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
        navigate('/settings', { replace: true, state: null });
    }, [navigate]);

    useEffect(() => {
        const fetch = async () => {
            const data = await _checkUserAccount();
            setIsPremium(data);
        };
        fetch();
    }, []);

    const tabs = [
        {
            title: "Output settings",
            component: <OutputSettings />,
        },
        {
            title: "User settings",
            component: <UserSettings isPremium={isPremium} />,
        },
        {
            title: "Experimental settings",
            component: <ExperimentalSettings />,
            display: isPremium,
        },
    ];

    const filteredTabs = tabs.filter(
        (tab) => !("display" in tab) || tab.display
    );

    return (
        <>
        <Sidebar />
        <section className="settings" style={{ '--theme-color': theme.color }}>
            <SettingsSelecting
                tabs={filteredTabs}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            {filteredTabs.find((tab) => tab.title === selectedTab)?.component}
        </section>
        </>
    );
}
