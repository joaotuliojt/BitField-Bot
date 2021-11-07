const Discord = require("discord.js")

module.exports = {
    name: "ping",
    async execute(message){
        message.reply(`🌐 **┃ ${message.client.ws.ping}ms**`);
    }
}