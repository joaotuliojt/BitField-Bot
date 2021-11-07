const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS",  "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS"] })
const fs = require('fs')
const {token} = require('./config.json')
const {prefix} = require('./config.json')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)

}



client.once('ready', () => {
  client.user.setActivity('Sendo desenvolvido', { type: 'PLAYING' })
  console.log(`${client.user.tag} is ready!`)
})

client.on('messageCreate', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase()
  if(command === "ping"){
      client.commands.get('ping').execute(message, args);
  }
  if(command === 'clear'){
    client.commands.get('clear').execute(message, args);
  }
  if(command === 'pokemon'){
    client.commands.get('pokemon').execute(message, args);
  }
  if(command === 'commands'){
    client.commands.get('commands').execute(message);
  } 
})

client.login(token)