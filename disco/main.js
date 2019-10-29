const token ='NjM0MzMzNDI1MDk1OTMzOTYy.Xal5jA.JtdqRI5RtKZLWPWLffc68phE8jg';
const Discord = require('discord.js');
const client = new Discord.Client();
const tools = require("./tools"); 

client.once('ready', () => {
    console.log('OKOKOK!!!!');
});

client.login(token);

client.on('message', message => {
    if (message.content === "!ping"){
        message.channel.send("PONG");
    }

    if (message.content==="!today"){
        const date = new Date();
        message.channel.send(date.toLocaleDateString("ja-JP"));
    }

    if (message.content==="???"){
        tools.shp
    }
    console.log("   DISCO: message processed   ");
});
