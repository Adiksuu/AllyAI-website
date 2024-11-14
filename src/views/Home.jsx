import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Home() {
  return (
    <section className="home">
        <div className="container">
            <h1>How can I help you?</h1>
            <p>Ask what you want and you will receive a quick and concise answer</p>
            <div className="input">
                <input type="text" placeholder='Write your question here...' />
                <button><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        </div>
    </section>
  )
}
