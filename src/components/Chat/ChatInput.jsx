import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { _getPrompts } from '../../functions/_maxPrompts'

export default function ChatInput({ currentChat, history, setLoading, loading }) {
    const [message, setMessage] = useState('')
    const [prompts, setPrompts] = useState(0)

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPrompts())
        }
        loadPrompts()
    }, [history])

    const handleSendMessage = (e) => {
        if (loading) return

        _sendMessage(message, setMessage, e, currentChat, history, setLoading)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e);
        }
    }

  return (
    <div className="input">
        <form className="content" onSubmit={(e) => handleSendMessage(e)}>
            <textarea disabled={loading || prompts >= 50} onKeyDown={handleKeyDown} type="text" placeholder={prompts >= 50 ? 'Prompts limit reached for today': loading ? 'Wait for response...' : 'Ask question'} onChange={(e) => setMessage(e.target.value)} value={message} />
            <button disabled={loading}><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    </div>
  )
}
