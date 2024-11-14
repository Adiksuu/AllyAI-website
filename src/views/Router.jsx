import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function Router() {
    const routes = [
        {
            path: "/",
            element: <Home />,
        },
    ];

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route path={route.path} element={route.element} key={index} />
            ))}
        </Routes>
    );
}