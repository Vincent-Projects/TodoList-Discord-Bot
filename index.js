const path = require("path");
const Discord = require("discord.js");
const client = new Discord.Client();

const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'development')
    dotenv.config({ path: path.join(__dirname, "config", "config.env") });

client.on('ready', () => {
    console.log('Logged in');
});

client.on('message', msg => {
    if (msg.content === 'ping')
        msg.reply('pong');
});

client.login(process.env.BOT_TOKEN);