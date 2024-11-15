import React from 'react'
import logo from '../../assets/images/logo.png'

export default function Message({ message }) {
    return (
        <div className={`message${message?.author === 'user' ? ' author' : ''}`}>
            <div className="leftside">
                <img src={logo} alt="logo of user" />
            </div>
            <div className="rightside">
                <div className="info">
                    <h2>{message.username}</h2>
                    <span>{message.date}</span>
                </div>
                <p>{message.text}</p>
            </div>
        </div>
    )
}