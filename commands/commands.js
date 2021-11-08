const { inlineCode } = require('@discordjs/builders');
const Discord = require('discord.js');


module.exports = {
  name: 'commands',

  async execute(message){
    message.channel.send({ embeds: [embed] });
  }
}

const commands = ['bf.pokemon', 'bf.clear', 'bf.ping']
const commandsFormatted = commands.map(command => inlineCode(command));

const embed = new Discord.MessageEmbed()
.setTitle('Comandos')
.setColor('#ff4000')
.addFields(
  {name: 'pokemon', value: `${commandsFormatted[0]}`, inline: true},
  {name: 'clear', value: `${commandsFormatted[1]}`, inline: true},
  {name: 'ping', value: `${commandsFormatted[2]}`, inline: true}
)
.setImage('https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfield.gif?raw=true')
.setThumbnail('https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfield.png?raw=true')
