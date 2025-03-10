import React, { useEffect, useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { auth } from "../api/database/connect";
import Loading from "./Loading";
import { _resetPrompts } from "../functions/_maxPrompts";

export default function Auth({ setAuthorized, setEmailVerified }) {
    const [currentView, setCurrentView] = useState("login");
    const [load, setLoad] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
              setAuthorized(true);
              setEmailVerified(user.emailVerified);
              setLoad(false);
                _resetPrompts();
            } else {
              setLoad(false);
            }
          });
    }, []);

    return !load ? (
        <>
            {currentView === "login" ? (
                <Login
                    setCurrentView={setCurrentView}
                    setAuthorized={setAuthorized}
                    setEmailVerified={setEmailVerified}
                />
            ) : (
                <Register
                    setCurrentView={setCurrentView}
                    setAuthorized={setAuthorized}
                    setEmailVerified={setEmailVerified}
                />
            )}
        </>
    ) : (
        <Loading />
    );
}
