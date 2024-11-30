import OutputSettings from "../components/Settings/OutputSettings";
import UserSettings from "../components/Settings/UserSettings";

export default function Settings() {
    return (
        <section className="settings">
            <OutputSettings />
            <UserSettings />
        </section>
    );
}
