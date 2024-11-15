import React from 'react'
import Message from './Message'

export default function Messages() {
    const messages = [
        {
            username: 'You',
            text: 'Hello, how are you?',
            date: '12:30 PM',
            author: true
        },
        {
            username: 'Bot',
            text: 'I am doing well, thank you! How about you?',
            date: '12:32 PM',
        },
        {
            username: 'You',
            text: 'Hello, how are you?',
            date: '12:30 PM',
            author: true
        },
        {
            username: 'Bot',
            text: 'I am doing well, thank you! How about you?',
            date: '12:32 PM',
        },
        {
            username: 'You',
            text: 'Hello, how are you?',
            date: '12:30 PM',
            author: true
        },
        {
            username: 'Bot',
            text: 'I am doing well, thank you! How about you?',
            date: '12:32 PM',
        },
        {
            username: 'You',
            text: 'Hello, how are you?',
            date: '12:30 PM',
            author: true
        },
        {
            username: 'Bot',
            text: 'I am doing well, thank you! How about you?',
            date: '12:32 PM',
        },
        {
            username: 'You',
            text: 'Hello, how are you?',
            date: '12:30 PM',
            author: true
        },
        {
            username: 'Bot',
            text: 'I am doing well, thank you! How about you?',
            date: '12:32 PM',
        },
        {
            username: 'Bot',
            text: 'I am doing well, thank you! How about you?',
            date: '12:33 PM',
        },
    ]

  return (
    <div className="messages">
        {messages.map((message, index) => <Message message={message} key={index} />)}
    </div>
  )
}
