import React, { useState } from 'react'
import { examples, getRandomExamples } from '../../api/gemini/examples'
import { useNavigate } from 'react-router-dom'
import { defaultHistory } from '../../api/gemini/defaultHistory'
import { _sendMessage } from '../../functions/_sendMessage'

export default function Examples() {
    const [currentChat] = useState(Math.floor(Math.random() * 999999999))
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [randomExamples, setRandomExamples] = useState(getRandomExamples(examples, 3))

    const handleNewChat = async (example) => {
        await _sendMessage(example, null, null, currentChat, [...defaultHistory], setLoading)
        navigate(`/chat/${currentChat}`)
    }

    const titles = [
        'What about this?',
        'Ask me this!',
        'Curious? Try me!'
    ]

    function Example({ example, index }) {
        return (
            <div className="example" onClick={() => handleNewChat(example)}>
                <h3>{titles[index]}</h3>
                <p>{example}</p>
            </div>
        )
    }

    return (
        <div className="examples">
            {randomExamples.map((example, index) => (
                <Example example={example} key={index} index={index} />
            ))}
        </div>
    )
}
