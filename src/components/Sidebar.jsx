import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import SearchBar from './SearchBar'
import OtherButtons from './OtherButtons'
import CreateChat from './CreateChat'

export default function Sidebar() {

    return (
        <div className='sidebar'>
            <div className="top">
                <div>
                    <img src={logo} alt="logo of app" />
                    <h1>AllyAI</h1>
                </div>
            </div>
            <SearchBar />
            <OtherButtons />
            <CreateChat />
        </div>
    )
}
