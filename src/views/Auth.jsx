import React, { useEffect, useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { auth } from "../api/database/connect";
import Loading from "./Loading";
import { _resetPrompts } from "../functions/_maxPrompts";

export default function Auth({ setAuthorized, setEmailVerified }) {
    const [currentView, setCurrentView] = useState('login')
    const [storage] = useState(localStorage.getItem('user'))
    const [load, setLoad] = useState(true)

    useEffect(() => {
        if (!storage) {
            setLoad(false)
            return
        }

        const storedData = JSON.parse(storage);
        auth.signInWithEmailAndPassword(storedData.email, storedData.password).then(async () => {
            setAuthorized(true)
            setEmailVerified(auth.currentUser.emailVerified)
            await _resetPrompts()
            setLoad(false)
        })
        
    }, [storage])

    return !load ? (
        <>
        {currentView === 'login' ? <Login setCurrentView={setCurrentView} setAuthorized={setAuthorized} /> : <Register setCurrentView={setCurrentView} setAuthorized={setAuthorized} />}
        </>
    ) : <Loading />
}
