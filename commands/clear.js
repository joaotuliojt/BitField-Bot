const Discord = require('discord.js');

module.exports = {
  name: 'clear',
  async execute(message, args){
    const repeats = Number(args[0]);
    if(!repeats){
      message.reply('Insira a quantidade de mensagens para deletar.')
      return;
    }
    message.channel.bulkDelete(repeats);
    message.reply(`${repeats} mensagens deletadas`).then(msg => setTimeout(() =>{msg.delete(5000)}, 2000) );
  }
}