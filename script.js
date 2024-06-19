let searchInput = document.getElementById('searchBar')

let pokemonDisplay = document.getElementById('poke-display')

let pokemonName = 'charmander'
let pokemon = []

let imageDisplay = null
let nameDisplay = null

document.getElementById('search').addEventListener('click', () => {
    pokemonName = searchInput.value
    fetchPokemon(pokemonName)
})

async function fetchPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const poke_data = await response.json()

    imageDisplay = document.createElement('img')
    imageDisplay.id = 'poke-img'
    nameDisplay = document.createElement('span')
    nameDisplay.id = 'poke-name'

    nameDisplay.textContent = poke_data.name

    imageDisplay.src = poke_data.sprites.front_default

    if(pokemonDisplay.childElementCount > 0){
        var x = pokemonDisplay.childNodes
        while (pokemonDisplay.firstChild)
            pokemonDisplay.removeChild(pokemonDisplay.firstChild)
    }

    pokemonDisplay.appendChild(imageDisplay)
    pokemonDisplay.appendChild(nameDisplay)
}