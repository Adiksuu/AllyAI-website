import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { _getUsername } from '../../functions/_getUsername';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function SharingPopup({ setActivate, uid, id }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({})

    const handleBlurred = () => {
        navigate('/chats');
    };
    const handleOpenChat = () => {
        setActivate(false)
        navigate(`/chat/${id.split('from')[0]}`)
    }

    useEffect(() => {
        const fetch = async () => {
            const data = await _getUsername(uid)
            const newUserData = {
                'username': data,
            }

            setUser(newUserData)
        }
        fetch()
    }, [uid])

    return (
        <>
            <div className="blurred-bg"></div>
            <div className="floating_chats">
                <div className="top">
                    <div className="leftside">
                        <span>Chat imported from {user.username}</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="buttons">
                        <button onClick={() => handleOpenChat()}><FontAwesomeIcon icon={faFileUpload} /> Open chat</button>
                        <button onClick={() => handleBlurred()}><FontAwesomeIcon icon={faTimesCircle} /> Back to chats</button>
                    </div>
                </div>

            </div>
        </>
    )
}
