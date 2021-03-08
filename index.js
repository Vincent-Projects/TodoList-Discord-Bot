const path = require("path");
const Discord = require("discord.js");


if (process.env.NODE_ENV === 'development') {
    const dotenv = require('dotenv');
    dotenv.config({ path: path.join(__dirname, "config", "config.env") });
}


const client = new Discord.Client();


client.on('ready', () => {
    console.log('Logged in');
});

client.on('message', msg => {
    if (msg.content === 'ping')
        msg.reply('pong');
});

client.login(process.env.BOT_TOKEN);