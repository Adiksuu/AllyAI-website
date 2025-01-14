import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Models from "./Models";
import Chat from "./Chat";
import Settings from "./Settings";
import Success from "./Success";
import Main from "./Main";
import UserProfile from "./UserProfile";

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
        // {
        //     path: '/profile',
        //     element: <UserProfile />
        // }
    ];

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route path={route.path} element={route.element} key={index} />
            ))}
        </Routes>
    );
}