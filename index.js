const { userMention } = require('@discordjs/builders');
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
  client.user.setActivity('A lívia no inferno', { type: 'PLAYING' })
  console.log(`${client.user.tag} is ready!`)
})

client.on('messageCreate', message =>{

  if(!message.author.bot){
    client.commands.get('randomReact').execute(message);
  }

  if(!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase()
  if(command === "ping"){
      client.commands.get('ping').execute(message, args);
      return
  }
  if(command === 'clear'){
    if(!isNaN(args)){
      client.commands.get('clear').execute(message, args);
      return
    }else{
      message.reply('Insira um valor válido!');
      return
    }
  }
  if(command === 'pokemon'){
    client.commands.get('pokemon').execute(message, args);
    return
  }
  if(command === 'help'){
    client.commands.get('help').execute(message);
    return
  }
  if(command === 'commands'){
    client.commands.get('commands').execute(message);
    return
  }
  const user = userMention(message.member.user.id);
  message.reply({content: `${user} Comando não encontrado`, ephemeral: true})
})

client.login(token)