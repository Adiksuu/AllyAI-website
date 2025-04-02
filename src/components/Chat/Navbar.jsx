import React, { useEffect, useState } from 'react'
import { faShareAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { _handleDelete } from '../../functions/_handleDelete'
import { models } from '../../api/models/modelsList'
import { useNavigate } from 'react-router-dom'
import { _handleShare } from '../../functions/_handleShare'

export default function Navbar({ id, experimental }) {
    const [back, setBack] = useState(false)
    const navigate = useNavigate();

    const buttons = [
        {
            icon: faShareAlt,
            do: () => _handleShare(id),
            exp: true
        },
        {
            icon: faTrashCan,
            do: () => _handleDelete(id, setBack),
            exp: false
        }
    ]

    useEffect(() => {
        if (back) {
            setBack(false)
            navigate('/chats')
        }
    }, [back])

    function Option({ button }) {
        return (
            <button onClick={() => button.do()}><FontAwesomeIcon icon={button.icon} /></button>
        )
    }

    return (
        <div className="navbar">
            <h1>Chatting with <span>{models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase()}</span></h1>
            <div className="options">
                {buttons.map((button, index) => 
                    button.exp === true ? (
                        experimental === true && <Option button={button} key={index} />
                    ) : (
                        <Option button={button} key={index} />
                    )
                )}
            </div>
        </div>
    )
}
