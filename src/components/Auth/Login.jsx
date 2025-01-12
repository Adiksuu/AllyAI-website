import React, { useState } from 'react'
import { _userAuth, _userGoogleAuth } from '../../functions/_userAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth, provider } from '../../api/database/connect';

export default function Login({ setCurrentView, setAuthorized, setEmailVerified }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    return (
        <section className="auth">
            <div className="auth-container">
                <h1>Welcome back</h1>
                <div onClick={() => _userGoogleAuth(auth, provider, setAuthorized, setEmailVerified)} className="google-btn"><FontAwesomeIcon icon={faGoogle} /> Continue with Google</div>
                <div className="divider">
                    <span>OR</span>
                </div>
                <form onSubmit={(e) => _userAuth(e, 'login', email , password, setError, '', setAuthorized, setEmailVerified)}>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <div className="error">{error}</div>}
                    <button type="submit" className="continue-btn">Continue</button>
                </form>
                <p className="terms">Don't have an account? <span onClick={() => setCurrentView('register')}>Sign Up</span></p>
            </div>
        </section>
    );
}
