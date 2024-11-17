import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'

export default function ChatInput({ currentChat, history, setLoading, loading }) {
    const [message, setMessage] = useState('')

    const handleSendMessage = (e) => {
        if (loading) return

        _sendMessage(message, setMessage, e, currentChat, history, setLoading)
    }

  return (
    <div className="input">
        <form className="content" onSubmit={(e) => handleSendMessage(e)}>
            <textarea disabled={loading} type="text" placeholder={loading ? 'Wait for response...' : 'Ask question'} onChange={(e) => setMessage(e.target.value)} value={message} />
            <button disabled={loading}><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    </div>
  )
}
