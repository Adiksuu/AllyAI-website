export default function SettingsSelecting({ tabs, selectedTab, setSelectedTab }) {

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    }

    function Tab({ tab }) {
        return (
            <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`settings_selecting_tab ${selectedTab === tab ? "active" : ""}`}
            >
                {tab}
            </button>
        );
    }

    return (
        <div className="settings_selecting">
            <h2>Settings</h2>
            <div className="settings_selecting_tabs">{tabs.map((tab, i) => <Tab tab={tab.title} key={i} />)}</div>
        </div>
    );
}
