import { faFileWord, faMicrophoneAlt, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { _generateWordDocument } from '../../functions/_generateWordDocument'
import { _textToSpeech } from '../../functions/_textToSpeech'

export default function MessageTools({ message }) {
    const [opened, setOpened] = useState(false)

    const tools = [
        {
            icon: faFileWord,
            action: () => _generateWordDocument(message.text)
        },
        {
            icon: faMicrophoneAlt,
            action: () => _textToSpeech(message.text),
            text: 'en'
        }
    ]

    function Tools () {
        return (
            <>
                {tools.map((tool, index) => (
                    <button key={index} onClick={tool.action}>
                        <FontAwesomeIcon icon={tool.icon} />
                        {tool?.text}
                    </button>
                ))}
            </>
        )
    }

  return (
    <div className="rating message-tools">
        <button onClick={() => setOpened(!opened)}>
            <FontAwesomeIcon icon={faScrewdriverWrench} />
        </button>
        {opened && <Tools />}
    </div>
  )
}
