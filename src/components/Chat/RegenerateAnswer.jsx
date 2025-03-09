import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { _regenerateAnswer } from '../../functions/_regenerateAnswer'

export default function RegenerateAnswer({ message, history, setLoading, setHistory }) {
  return (
    <div className="regenerate" onClick={() => _regenerateAnswer(message, history, setLoading, setHistory)}>
        <div className="icon"><FontAwesomeIcon icon={faRefresh}/></div>
        <span>Regenerate Response</span>
    </div>
  )
}
