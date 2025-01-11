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
                <h1>Create your account</h1>
                <div className="divider">
                    <span>SIGN UP</span>
                </div>
                <form onSubmit={(e) => _userAuth(e, 'register', email, password, setError, username, setAuthorized)}>
                    <input type="text" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="continue-btn">Continue</button>
                    {error.length > 0 ? <span>{error}</span> : null}
                </form>
                <p className="terms">Don't have an account? <span onClick={() => setCurrentView('login')}>Sign Up</span></p>
            </div>
        </section>
    );
}
