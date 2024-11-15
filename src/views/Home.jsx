import React from 'react'
import HomeInput from '../components/Home/HomeInput'

export default function Home() {
  return (
    <section className="home">
        <div className="container">
            <h1>How can I help you?</h1>
            <p>Ask what you want and you will receive a quick and concise answer</p>
            <HomeInput />
        </div>
    </section>
  )
}
