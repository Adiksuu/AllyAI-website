import React, { useState } from 'react'
import { _userAuth } from '../../functions/_userAuth';

export default function Login({ setCurrentView, setAuthorized }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    return (
        <section className="auth">
            <div className="auth-container">
                <div className="auth-left">
                    <h2>Sign In</h2>
                    <form onSubmit={(e) => _userAuth(e, 'login', email, password, setError, '', setAuthorized)}>
                        <div className="input-group">
                            <label>EMAIL</label>
                            <input type="text" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>PASSWORD</label>
                            <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn-signin">
                            Sign In
                        </button>
                        {error.length > 0 ? <span>{error}</span> : null}
                    </form>
                </div>
                <div className="auth-right">
                    <h2>Welcome back!</h2>
                    <p>Don't have an account?</p>
                    <button className="btn-signup" onClick={() => setCurrentView('register')}>Sign Up</button>
                </div>
            </div>
        </section>
    );
}
