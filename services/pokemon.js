const axios = require('axios').default;

const baseUrl = "https://pokeapi.co/api/v2/pokemon"

async function searchPokemon(pokemonName){
  let pokemon;
  await axios.get(`${baseUrl}/${pokemonName}`).then(response =>{
    pokemon = response.data;
  })  

  return pokemon;
}


module.exports = searchPokemon



