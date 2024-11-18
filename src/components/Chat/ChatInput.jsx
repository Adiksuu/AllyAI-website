import { faFile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { _getPrompts } from '../../functions/_maxPrompts'

export default function ChatInput({ currentChat, history, setLoading, loading }) {
    const [message, setMessage] = useState('')
    const [prompts, setPrompts] = useState(0)
    const [file, setFile] = useState(null);

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPrompts())
        }
        loadPrompts()
    }, [history])

    const handleSendMessage = (e) => {
        if (loading) return

        _sendMessage(message, setMessage, e, currentChat, history, setLoading, file, setFile)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e);
        }
    }

    const handleFileUpload = async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
          setFile(uploadedFile);
        }
      };

  return (
    <div className="input">
        <form className="content" onSubmit={(e) => handleSendMessage(e)}>
            <input id='upload' type='file' disabled={loading} onChange={handleFileUpload} ></input>
            <label htmlFor="upload"><FontAwesomeIcon icon={faFile} /></label>
            <textarea disabled={loading || prompts >= 50} onKeyDown={handleKeyDown} type="text" placeholder={prompts >= 50 ? 'Prompts limit reached for today': loading ? 'Wait for response...' : 'Ask question'} onChange={(e) => setMessage(e.target.value)} value={message} />
            <button disabled={loading}><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    </div>
  )
}
