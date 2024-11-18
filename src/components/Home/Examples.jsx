import React, { useState } from 'react'
import { examples, getRandomExamples } from '../../api/gemini/examples'
import { useNavigate } from 'react-router-dom'
import { _sendMessage } from '../../functions/_sendMessage'
import { models } from '../../api/models/modelsList'

export default function Examples({ model }) {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [randomExamples] = useState(getRandomExamples(examples, 3))

    const handleNewChat = async (example) => {
        const currentChat = `${models.find(a => a.name === model).symbole}${Math.floor(Math.random() * 999999999)}`
        await _sendMessage(model, example, null, null, currentChat, [...models.find(a => a.name === model).defaultHistory], setLoading)
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
