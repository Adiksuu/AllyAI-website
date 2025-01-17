import { BrowserRouter, useLocation } from "react-router-dom";
import Router from "./views/Router";
import { useState } from "react";
import Auth from "./views/Auth";
import AutorizationPopup from "./components/Auth/AutorizationPopup";

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
            {authorized && !emailVerified ? <AutorizationPopup /> : null}
            <Router />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
