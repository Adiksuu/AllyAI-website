import React from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'
import OtherButtons from './OtherButtons'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <div>
                <img src={logo} alt="logo of app" />
                <h1>AllyAI</h1>
            </div>
            <button><FontAwesomeIcon icon={faBars} /></button>
        </div>
        <SearchBar />
        <OtherButtons />
        {/* <Chats /> */}
    </div>
  )
}
