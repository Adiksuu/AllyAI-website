import React from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    const buttons = [
        {
            icon: faTrashCan
        }
    ]

    function Option({ button }) {
        return (
            <button><FontAwesomeIcon icon={button.icon} /></button>
        )
    }

    return (
        <div className="navbar">
            <h1>Chatting with ALLY-2</h1>
            <div className="options">
                {buttons.map((button, index) => <Option button={button} key={index} />)}
            </div>
        </div>
    )
}
