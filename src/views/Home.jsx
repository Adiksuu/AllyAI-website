import React, { useState } from 'react'
import HomeInput from '../components/Home/HomeInput'
import Examples from '../components/Home/Examples'
import ModelSelecting from '../components/Home/ModelSelecting'

export default function Home() {
    const [model, setModel] = useState('Ally-2')

    return (
        <section className="home">
            <Examples model={model} />
            <div className="container">
                <h1>How can I help you?</h1>
                <p>Ask what you want and you will receive a quick and concise answer</p>
                <HomeInput model={model} />
                <ModelSelecting model={model} setModel={setModel} />
            </div>
        </section>
    )
}
