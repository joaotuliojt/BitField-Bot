const Discord = require('discord.js');
const { inlineCode } = require('@discordjs/builders');

module.exports = {
  name: 'helpQuiz',

  async execute(message){
    message.channel.send({ embeds: [embed] });
  }
}

const commands = ['bf.html', 'bf.js-beginner', 'bf.js-intermediate', 'bf.js-advanced'];
const commandsFormatted = commands.map(command => inlineCode(command));

const embed = new Discord.MessageEmbed()
.setTitle('Quizes')
.setColor('#ff4000')
.addFields(
  {name: 'html', value: `${commandsFormatted[0]}`, inline: true},
  {name: 'js-beginner', value: `${commandsFormatted[1]}`, inline: true},
  {name: 'js-intermdiate', value: `${commandsFormatted[2]}`, inline: true},
  {name: 'js-advanced', value: `${commandsFormatted[3]}`, inline: true}
)
.setImage('https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfield.gif?raw=true')
.setThumbnail('https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfield.png?raw=true')