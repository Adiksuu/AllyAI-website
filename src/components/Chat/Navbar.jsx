import React, { useEffect, useState } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { _handleDelete } from '../../functions/_handleDelete'
import { useNavigate } from 'react-router-dom'
import { models } from '../../api/models/modelsList'

export default function Navbar({ id }) {
    const [back, setBack] = useState(false)
    const navigate = useNavigate()

    const buttons = [
        {
            icon: faTrashCan,
            do: () => _handleDelete(id, setBack)
        }
    ]

    useEffect(() => {
        if (back) {
            setBack(false)
            navigate('/')
        }
    }, [back])

    function Option({ button }) {
        return (
            <button onClick={() => button.do()}><FontAwesomeIcon icon={button.icon} /></button>
        )
    }

    return (
        <div className="navbar">
            <h1>Chatting with {models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase()}</h1>
            <div className="options">
                {buttons.map((button, index) => <Option button={button} key={index} />)}
            </div>
        </div>
    )
}
