
const Discord = require('discord.js');
const {prefix, config} = require('./config.json');
const token=config.token;

const client = new Discord.Client();
//const tools = require("./tools");

client.once('ready', () => {
    console.log('OKOKOK!!!!');
});


client.on('message', message => {
    if (!message.content.startsWith("!") || message.author.bot) return;

    

    if (message.content === `${prefix}ping`){
        message.channel.send("PONG");
    }

    if (message.content===`${prefix}today`){
        const date = new Date();
        message.channel.send(date.toLocaleDateString("ja-JP"));
    }
    
    if (message.content===`${prefix}mods`){
        message.channel.send("Not Ready Yet!");
    }
    console.log("   DISCO: message processed   ");
});

client.login(token)
.then(console.log)
.catch(console.error);