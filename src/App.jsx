import { BrowserRouter } from "react-router-dom";
import Router from "./views/Router";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Auth from "./views/Auth";
import AutorizationPopup from "./components/Auth/AutorizationPopup";

function App() {
    const [authorized, setAuthorized] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false)

    return authorized ? (
        <>
            <BrowserRouter>
                <Sidebar />
                {/* {!emailVerified ? <AutorizationPopup /> : null} */}
                <AutorizationPopup />
                <Router />
            </BrowserRouter>
        </>
    ) : (
        <Auth setAuthorized={setAuthorized} setEmailVerified={setEmailVerified} />
    );
}

export default App;
