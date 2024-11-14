import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Router from "./views/Router";
import Loading from "./views/Loading";
import { useEffect, useState } from "react";
import { auth } from "./api/database/connect";
import { _loginAsGuest } from "./api/database/_loginAsGuest";

function App() {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        if (authorized) return;

        _loginAsGuest(setAuthorized);
    }, [authorized]);

    return authorized ? (
        <>
            <BrowserRouter>
                <Sidebar />
                <Router />
            </BrowserRouter>
        </>
    ) : (
        <Loading />
    );
}

export default App;
