import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { auth } from '../../api/database/connect'
import { _sendVerificationEmail } from '../../functions/_sendVerificationEmail'

export default function AuthorizationPopup() {
    return (
        <>
            <div className="blurred-bg"></div>
            <div className="verify_email">
                <div className="top">
                    <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                </div>
                <div className="info">
                    <h2>Please verify your email</h2>
                    <p>We have sent confirmation to <strong>{auth.currentUser.email}</strong>. Check your email to verify</p>
                </div>
                <div className="buttons">
                    <button onClick={() => _sendVerificationEmail()}>Send again</button>
                </div>
            </div>
        </>
    )
}
