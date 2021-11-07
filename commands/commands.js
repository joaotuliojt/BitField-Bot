const Discord = require('discord.js');
const MessageEmbed = Discord.MessageEmbed;

module.exports = {
  name: 'commands',

  async execute(message){
    message.channel.send({ embeds: [embed] });
  }
}


const embed = new MessageEmbed()
	.setColor('#53dd6c')
	.setTitle('Comandos Bot BitField')
	.setAuthor('BitField', 'https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfieldTransparent.png?raw=true')
	.setDescription('Aqui está os principais comandos do bot')
	.setThumbnail('https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfield.png?raw=true')
	.addFields(
		{ name: 'bf.pokemon', value: 'Busque algum pokemon.', inline: true },
		{ name: 'bf.clear', value: 'Limpe o chat do seu servidor.', inline: true },
	)
	.setImage('https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfield.png?raw=true')
	.setTimestamp()
	.setFooter('Obrigado por usar BitField Bot', 'https://github.com/joaotuliojt/BitField-Bot/blob/main/assets/bitfieldTransparent.png?raw=true');