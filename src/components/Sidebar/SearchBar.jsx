import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SearchBar({ searching, setSearching, setActivate }) {
  return (
    <div className="searchbar">
        <input onClick={() => setActivate(true)} type="text" placeholder='Search for chats...' value={searching} onChange={(e) => setSearching(e.target.value)} />
        <button aria-label='search'><FontAwesomeIcon icon={faSearch} /></button>
    </div>
  )
}
