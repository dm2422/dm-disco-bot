
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
//const tools = require("./tools");

client.once('ready', () => {
    console.log('OKOKOK!!!!');
});


client.on('message', message => {
    if (!message.content.startsWith("!") || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content === `${prefix}ping`){
        message.channel.send("PONG");
    }

    else if (message.content===`${prefix}today`){
        const date = new Date();
        message.channel.send(date.toLocaleDateString("ja-JP"));
    }
    
    else if (message.content===`${prefix}mods`){
        message.channel.send("Not Ready Yet!");
    }

    else if (command === "args-info"){
       if (!args.length) {
           message.channel.send(`Enter args! ${message.author}`);
       } 
       message.channel.send(`Command: ${command}\nArgs: ${args}`);
    }
    console.log(`   DISCO: message processed   ${message}`);
});

client.login(token)
.then(console.log)
.catch(console.error);