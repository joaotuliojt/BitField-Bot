const Discord = require('discord.js');
const MessageEmbed = Discord.MessageEmbed;


const attachment = new Discord.MessageAttachment('../assets/bitfield.png', 'bitfield.png');


module.exports = {
  name: 'commands',

  async execute(message){
    message.channel.send({ embeds: [embed], files: [attachment] });
  }
}


const embed = new MessageEmbed()
	.setColor('#53dd6c')
	.setTitle('Comandos Bot BitField')
	.setAuthor('BitField', 'attachment://bitfield.png')
	.setDescription('Aqui está os principais comandos do bot')
	.setThumbnail('attachment://bitfield.png')
	.addFields(
		{ name: 'bf.pokemon {pokemon}', value: 'Busque algum pokemon.' },
		{ name: 'bf.clear {valor}', value: 'Limpe o chat do seu servidor.' },
	)
	.setImage('attachment://bitfield.png')
	.setTimestamp()
	.setFooter('Obrigado por usar BitField Bot', 'attachment://bitfield.png');


/* const embed = {
  color: "#53dd6c",
	title: 'Comandos Bot BitField',
	author: {
		name: 'BitField',
		icon_url: '../images/bitfield-removebg-preview.png',
	},
	description: 'Aqui está os principais comandos do bot',
	thumbnail: {
		url: '../images/bitfield.png',
	},
	fields: [
		{
			name: 'bf.pokemon {pokemon}',
			value: 'Busque algum pokemon.',

		},
		{
			name: 'bf.clear {valor}',
			value: 'Limpe o chat do seu servidor.',
			inline: false,
		},
	],
	image: {
		url: '../images/bitfield.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Obrigado por usar BitField Bot',
		icon_url: '../images/bitfield-removebg-preview.png',
	},
} */