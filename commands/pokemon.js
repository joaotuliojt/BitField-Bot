const Discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
const searchPokemon = require('../services/pokemon'); 

module.exports = {
    name: "pokemon",
    async execute(message, args){

      const pokemonName = args[0];

      if(!pokemonName){
        message.reply('Insira o nome de um pokemon.');
        return;
      }

      searchPokemon(pokemonName).then((pokemon)=>{

        const pokemonFormated = getInformation(pokemon);
        const embed = createEmbed(pokemonFormated)
      
        message.channel.send({embeds: [embed]})     
      }).catch(() => {
        message.reply('Pokemon não encontrado.')
      });


    }
}


function getInformation(pokemon){
  const name = firstLetterUpperCase(pokemon.forms[0].name);
  const image = pokemon.sprites["front_default"];
  const allTypes = pokemon.types;

  const types = allTypes.map(typePokemon => typePokemon.type.name);


  return {name, types, image}
}


function createEmbed(pokemon){

   const embed = new MessageEmbed()
    .setTitle(`${pokemon.name}`)
    .setThumbnail(pokemon.image)
    .setImage(pokemon.image)
    .setColor('#5e17eb')
    .setDescription(`Pokemon: ${pokemon.name}, do(s) tipo: ${pokemon.types.join(', ')}. `)
    .setFooter('Pokemon encontrado pela pokeapi, link: https://pokeapi.co/ ')
    .setTimestamp()

    return embed;
}


function firstLetterUpperCase(name){
  const nameEdited = name.charAt(0).toUpperCase() + name.slice(1);
  return nameEdited;
}