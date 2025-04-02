import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { _getChatSuggestions } from '../../functions/_getChatSuggestions'

export default function Suggestions({ history, setMessage, message }) {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        if (!history) return;
    
        const fetch = async () => {
            const data = await _getChatSuggestions(history);
            setSuggestions(Array.isArray(data) ? data : []);
        };
    
        fetch();
    }, [history]);
    

    function Suggestion({ suggestion }) {
        return (
            <div className="suggestion" onClick={() => setMessage(suggestion.trim())}>
                <span><FontAwesomeIcon icon={faUpRightFromSquare} /></span>
                <p>{suggestion.length >= 40 ? `${suggestion.substring(0, 40)}...` : suggestion}</p>
            </div>
        )
    }

  return (
    <div className="suggestions">
        {suggestions.slice(0, 3).map((sug, i) => <Suggestion suggestion={sug} key={i} />)}
    </div>
  )
}
