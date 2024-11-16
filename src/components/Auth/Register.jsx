import React, { useState } from 'react'
import { _userAuth } from '../../functions/_userAuth';

export default function Register({ setCurrentView, setAuthorized }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')

    return (
        <section className="auth">
            <div className="auth-container">
                <div className="auth-left">
                    <h2>Sign Up</h2>
                    <form onSubmit={(e) => _userAuth(e, 'register', email, password, setError, username, setAuthorized)}>
                        <div className="input-group">
                            <label>EMAIL</label>
                            <input type="text" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>USERNAME</label>
                            <input type="text" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>PASSWORD</label>
                            <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn-signin">
                            Sign Up
                        </button>
                        {error.length > 0 ? <span>{error}</span> : null}
                    </form>
                </div>
                <div className="auth-right">
                    <h2>Create an account</h2>
                    <p>Don't have an account?</p>
                    <button className="btn-signup" onClick={() => setCurrentView('login')}>Sign In</button>
                </div>
            </div>
        </section>
    );
}
