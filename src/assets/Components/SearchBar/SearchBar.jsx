import { useState } from 'react'

import './SearchBar.css'

const SearchBar = ({ fetch }) => {
	const [name, setName] = useState('pikachu')
	var searchInput

	function assignValue(word) {
		searchInput = word.toLowerCase()
		setName(searchInput)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		assignValue(name)
		fetch(name)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" id="search" value={name} onChange={(e) => setName(e.target.value)} />
			<button type="submit" id="searchBtn" placeholder="Search...">
				<img src="https://img.icons8.com/?size=100&id=DZe3wFKTc8IK&format=png&color=FC405C" alt="" />
			</button>
		</form>
	)
}

export default SearchBar
