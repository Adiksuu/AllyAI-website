import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateChat() {
  return (
    <div className="bottom">
        <Link to={'/chats'} className="createChat"><FontAwesomeIcon icon={faPlus} /> Create new chat</Link>
    </div>
  )
}
