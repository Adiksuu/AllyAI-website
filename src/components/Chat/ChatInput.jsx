import { faFile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { _getPrompts } from '../../functions/_maxPrompts'
import { models } from '../../api/models/modelsList'

export default function ChatInput({ currentChat, history, setLoading, loading }) {
    const [message, setMessage] = useState('')
    const [prompts, setPrompts] = useState(0)
    const [file, setFile] = useState(null);
    const model = models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase()

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPrompts(model.toUpperCase()))
        }
        loadPrompts()
    }, [history])

    const handleSendMessage = (e) => {
        if (loading) return

        _sendMessage(model.toUpperCase(), message, setMessage, e, currentChat, history, setLoading, file, setFile)
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
        } else {
            setFile(null)
        }
      };

    const maxModelPrompts = models.find(a => a.name.toUpperCase() === model.toUpperCase()).dailyLimit

  return (
    <div className="input">
        <form className="content" onSubmit={(e) => handleSendMessage(e)}>
            <input id='upload' type='file' accept='image/*' disabled={loading} onChange={handleFileUpload} ></input>
            {model === 'ALLY-IMAGINE' ? null : <label className={file ? 'uploaded' : ''} htmlFor="upload"><FontAwesomeIcon icon={faFile} /></label>}
            <textarea disabled={loading || prompts >= maxModelPrompts} onKeyDown={handleKeyDown} type="text" placeholder={prompts >= maxModelPrompts ? 'Prompts limit reached for today': loading ? 'Wait for response...' : 'Ask question'} onChange={(e) => setMessage(e.target.value)} value={message} />
            <button disabled={loading}><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    </div>
  )
}
