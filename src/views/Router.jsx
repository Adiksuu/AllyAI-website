import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Loading.jsx";

// Lazy-loaded components
const Home = React.lazy(() => import("./Home"));
const Models = React.lazy(() => import("./Models"));
const Chat = React.lazy(() => import("./Chat"));
const Settings = React.lazy(() => import("./Settings"));
const Success = React.lazy(() => import("./Success"));
const Main = React.lazy(() => import("./Main"));
const Event = React.lazy(() => import("./Event"));

export default function Router() {
    const routes = [
        {
            path: "/",
            element: <Main />,
        },
        {
            path: "/chats",
            element: <Home />,
        },
        {
            path: "/settings",
            element: <Settings />,
        },
        {
            path: "/models",
            element: <Models />,
        },
        {
            path: "/chat/:id",
            element: <Chat />,
        },
        {
            path: '/success',
            element: <Success />
        },
        {
            path: '/event',
            element: <Event />
        },
    ];

    return (
        // Suspense with a fallback UI (e.g., a loading spinner)
        <Suspense fallback={<Loading />}>
            <Routes>
                {routes.map((route, index) => (
                    <Route path={route.path} element={route.element} key={index} />
                ))}
            </Routes>
        </Suspense>
    );
}