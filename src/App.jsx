import { BrowserRouter, useLocation } from "react-router-dom";
import Router from "./views/Router";
import { useState } from "react";
import Auth from "./views/Auth";
import AuthorizationPopup from "./components/Auth/AuthorizationPopup.jsx";
import PluginHandler from "./components/Plugins/PluginHandler";

function AppContent() {
    const location = useLocation();
    const [authorized, setAuthorized] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);

    if (!authorized && location.pathname !== "/") {
        return (
            <Auth
                setAuthorized={setAuthorized}
                setEmailVerified={setEmailVerified}
            />
        );
    }

    return (
        <>
            {authorized && !emailVerified ? <AuthorizationPopup /> : null}
            <Router />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
            <PluginHandler />
        </BrowserRouter>
    );
}

export default App;
