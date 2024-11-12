import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function CreateChat() {
  return (
    <div className="bottom">
        <button className="createChat"><FontAwesomeIcon icon={faPlus} /> Create new chat</button>
    </div>
  )
}
