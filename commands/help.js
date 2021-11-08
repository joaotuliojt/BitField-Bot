const { inlineCode } = require('@discordjs/builders');
const Discord = require('discord.js');
const MessageEmbed = Discord.MessageEmbed;

module.exports = {
  name: 'help',

  async execute(message){
    message.channel.send({ embeds: [embed] });
  }
}

const inline = inlineCode('bf.commands');

const embed = new MessageEmbed()
	.setColor('#53dd6c')
	.setTitle('Comandos Bot BitField')
	.setAuthor('BitField', 'https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfieldTransparent.png?raw=true')
	.setDescription('✨ Olá, eu sou o BitField! ✨ ')
  .addField('Primeiros passos:' , `Use ${inline} para ver meus comandos`, true)
	.setThumbnail('https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfield.png?raw=true')
	.setImage('https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfield.gif?raw=true')
	.setTimestamp()
	.setFooter('Obrigado por usar BitField Bot', 'https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfieldTransparent.png?raw=true');