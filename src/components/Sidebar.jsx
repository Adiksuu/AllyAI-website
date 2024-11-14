import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'
import OtherButtons from './OtherButtons'
import CreateChat from './CreateChat'
import { _toggleSidebar } from '../functions/sidebar/_toggleSidebar'

export default function Sidebar() {
    const [hiddenSidebar, setHiddenSidebar] = useState(false)

    return (
        <div className={`sidebar${hiddenSidebar ? ' hidden' : ''}`}>
            <div className="top">
                <div>
                    <img src={logo} alt="logo of app" />
                    <h1>AllyAI</h1>
                </div>
                <button onClick={() => _toggleSidebar(hiddenSidebar, setHiddenSidebar)}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <SearchBar />
            <OtherButtons />
            <CreateChat />
        </div>
    )
}
