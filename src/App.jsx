import React, {useState} from 'react'

import './App.css'
import ResultCard from './assets/Components/SearchCard/ResultCard'
import SearchBar from './assets/Components/SearchBar/SearchBar'

function App() {
  const [pokemon, setPokemon] = useState([])

  async function FetchPokemon(name) { // This fetches the pokemon in the PokeAPI
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      if(!response.ok){
        throw new Error('Pokemon not found')
      }
      const poke_data = await response.json()

      setPokemon(poke_data)
    } catch (error) {
      alert("Pokemon not found")
    }

  }
  return (
    <main>
      <SearchBar fetch={FetchPokemon} />
      {pokemon.name ? <ResultCard 
        name={pokemon.name} 
        image={pokemon.sprites.other[`showdown`].front_default}
        image2={pokemon.sprites.other[`official-artwork`].front_default}
        height={pokemon.height * 10}
        weight={pokemon.weight / 10}
        health={pokemon.stats[0].base_stat}
        attack={pokemon.stats[1].base_stat}
        defense={pokemon.stats[2].base_stat}
        sp={pokemon.stats[3].base_stat}
        sd={pokemon.stats[4].base_stat}
        speed={pokemon.stats[5].base_stat}
        type={pokemon.types}
      /> : <ResultCard />}
    </main>
  )
}

export default App
