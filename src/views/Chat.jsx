import React from 'react'
import Navbar from '../components/Chat/Navbar'
import Messages from '../components/Chat/Messages'

export default function Chat() {
  return (
    <section className="chat">
        <Navbar />
        <Messages />
    </section>
  )
}
