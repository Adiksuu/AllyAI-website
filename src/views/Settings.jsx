import { useState } from "react";
import OutputSettings from "../components/Settings/OutputSettings";
import SettingsSelecting from "../components/Settings/SettingsSelecting";
import UserSettings from "../components/Settings/UserSettings";
import ExperimentalSettings from "../components/Settings/ExperimentalSettings";

export default function Settings() {
    const [selectedTab, setSelectedTab] = useState("Output settings");

    const tabs = [
        {
            title: "Output settings",
            component: <OutputSettings />
        },
        {
            title: "User settings",
            component: <UserSettings />
        },
        {
            title: "Experimental settings",
            component: <ExperimentalSettings />
        }
    ]

    return (
        <section className="settings">
            <SettingsSelecting tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {tabs.find(tab => tab.title === selectedTab).component}
        </section>
    );
}
