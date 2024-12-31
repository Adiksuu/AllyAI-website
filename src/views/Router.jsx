import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Models from "./Models";
import Chat from "./Chat";
import Settings from "./Settings";
import Success from "./Success";

export default function Router() {
    const routes = [
        {
            path: "/",
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
        }
    ];

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route path={route.path} element={route.element} key={index} />
            ))}
        </Routes>
    );
}