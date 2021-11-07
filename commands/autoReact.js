const Discord = require('discord.js');

module.exports = {
  name: 'randomReact',

  async execute(message){
    let number = randomNumber();
    if(number <= 15){
      message.react(emojis[selectPositionEmoji()]);
    }

  }
}

const emojis = ['😂', '😍', '🤩', '😋', '🤔', '😎']

function randomNumber(){
  return Math.floor(Math.random() * 100 + 1);
}

function selectPositionEmoji(){
  return Math.floor(Math.random() * emojis.length + 1);
}
