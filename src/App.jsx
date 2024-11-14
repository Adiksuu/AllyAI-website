import { BrowserRouter } from "react-router-dom";
import Router from "./views/Router";
import Loading from "./views/Loading";
import { useEffect, useState } from "react";
import { _loginAsGuest } from "./api/database/_loginAsGuest";
import Sidebar from "./components/Sidebar/Sidebar";

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
