import React, { useState } from 'react'
import ResultCard from '../SearchCard/ResultCard'

import './SearchBar.css'

const SearchBar = ({fetch}) => {
  const [name, setName] = useState("pikachu")
  function assignValue(word) {
    var x = word.toLowerCase()
    setName(x)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(name)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" id='search' value={name} onChange={(e) => assignValue(e.target.value)}/>
        <button type="submit" id="searchBtn" placeholder="Search...">
          <img src="https://img.icons8.com/?size=100&id=DZe3wFKTc8IK&format=png&color=FC405C" alt="" />
        </button>
    </form>

  )
}

export default SearchBar