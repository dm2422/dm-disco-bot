const token='NjM0MzMzNDI1MDk1OTMzOTYy.Xbi9gQ.dPA0zuymp0IkywmPEOjm-X_wAcg';
const Discord = require('discord.js');
const client = new Discord.Client();

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

    if (message.content==="{}")
    console.log("   DISCO: message processed   ");
});
