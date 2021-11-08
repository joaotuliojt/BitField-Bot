const { userMention } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
  name: 'clear',
  async execute(message, args){
    if(!message.member.roles.cache.some(role => role.name === "Administradores"|| "Dono")){
      message.reply("Você não tem permissão para este comando!")
      return;
    }
    const repeats = Number(args[0]);

    if(repeats < 1 ){
      message.reply('Insira um valor válido');
      return;
    }
    message.channel.bulkDelete(repeats);
    const user = userMention(message.member.user.id)
    message.reply(`${user} apagou ${repeats} ${repeats > 1 ? 'mensagens' : 'mensagem'}`);
  }
}