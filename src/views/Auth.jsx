import React, { useEffect, useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { auth } from "../api/database/connect";
import Loading from "./Loading";

export default function Auth({ setAuthorized }) {
    const [currentView, setCurrentView] = useState('login')
    const [storage] = useState(localStorage.getItem('user'))
    const [load, setLoad] = useState(true)

    useEffect(() => {
        if (!storage) {
            setLoad(false)
            return
        }

        const storedData = JSON.parse(storage);
        auth.signInWithEmailAndPassword(storedData.email, storedData.password).then(() => {
            setLoad(false)
            setAuthorized(true)
        })
        
    }, [storage])

    return !load ? (
        <>
        {currentView === 'login' ? <Login setCurrentView={setCurrentView} setAuthorized={setAuthorized} /> : <Register setCurrentView={setCurrentView} setAuthorized={setAuthorized} />}
        </>
    ) : <Loading />
}
