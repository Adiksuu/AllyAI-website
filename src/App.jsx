import { BrowserRouter } from "react-router-dom";
import Router from "./views/Router";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Auth from "./views/Auth";

function App() {
    const [authorized, setAuthorized] = useState(false);

    return authorized ? (
        <>
            <BrowserRouter>
                <Sidebar />
                <Router />
            </BrowserRouter>
        </>
    ) : (
        <Auth setAuthorized={setAuthorized} />
    );
}

export default App;
