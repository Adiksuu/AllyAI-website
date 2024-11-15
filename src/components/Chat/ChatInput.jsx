import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'

export default function ChatInput({ currentChat }) {
    const [message, setMessage] = useState('')

  return (
    <div className="input">
        <form className="content" onSubmit={(e) => _sendMessage(message, setMessage, e, currentChat)}>
            <textarea type="text" placeholder='Ask question' onChange={(e) => setMessage(e.target.value)} value={message} />
            <button><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    </div>
  )
}
