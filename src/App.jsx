import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Router from "./views/Router";

function App() {
    return (
        <>
        <BrowserRouter>
            <Sidebar />
            <Router />
        </BrowserRouter>
        </>
    );
}

export default App;
