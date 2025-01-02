import { useEffect, useState } from "react";
import OutputSettings from "../components/Settings/OutputSettings";
import SettingsSelecting from "../components/Settings/SettingsSelecting";
import UserSettings from "../components/Settings/UserSettings";
import ExperimentalSettings from "../components/Settings/ExperimentalSettings";
import { _checkUserAccount } from "../functions/_upgradeAccount";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Settings() {
    const [selectedTab, setSelectedTab] = useState("Output settings");
    const [isPremium, setIsPremium] = useState(false);

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
        <section className="settings">
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
