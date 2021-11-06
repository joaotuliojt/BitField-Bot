const fs = require('fs');
const { Client, Collection, Intents, MessageEmbed} = require('discord.js')
const { token, prefix } = require('./config.json');
const { channel } = require('diagnostics_channel');



const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.data.name, command)
}

client.once('ready', () => {
	client.user.setActivity('Bot BitFiel, ao seu dispor', { type: 'PLAYING' })
	console.log(`Online no cliente ${client.user.tag}`)
})

client.on('messageCreate', message => {
  const messageSplited = message.content.split(" ");
  const command = messageSplited[0]
  const repeats = Number(messageSplited[1]);


	if(command === `${prefix}clear`){ 
    message.channel.bulkDelete(repeats);
    message.reply(`${repeats} mensagens deletadas`).then(msg => setTimeout(() =>{msg.delete(5000)}, 2000) );
	}
})

client.on('messageCreate', message => {
  const messageSplited = message.content.split(" ");
  const command = messageSplited[0]
  const pokemonName = messageSplited[1];
  

	if(command === `${prefix}pokemon`){
    if(!pokemonName){
      message.reply("Escreva o nome de um pokemon!");
      return
    }
    const searchPokemon = require('./services/pokemon'); 
    
    searchPokemon(pokemonName).then((pokemon)=>{
      const image = pokemon.sprites["front_default"];
      const embed = new MessageEmbed()
        .setTitle(`${pokemon.forms[0].name.toUpperCase()}`)
        .setImage(image)
        .setColor('RED')

      message.channel.send({embeds: [embed]})
      
      
    }).catch(() => {
      message.reply('Pokemon não encontrado.')
    });

   
    
	}
})




client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName)
	if (!command) return

	try {
		await command.execute(interaction)
	} catch (error) {
		console.error(error)
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
	}
})

client.login(token)