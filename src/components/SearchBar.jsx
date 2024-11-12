import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SearchBar() {
  return (
    <div className="searchbar">
        <input type="text" placeholder='Search for chats...' />
        <button><FontAwesomeIcon icon={faSearch} /></button>
    </div>
  )
}
