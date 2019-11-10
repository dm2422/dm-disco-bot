
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
//const tools = require("./tools");

client.once('ready', () => {
    console.log('OKOKOK!!!!');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `ping`){
        message.channel.send("PONG");
    }

    else if (command === `today`){
        const date = new Date();
        message.channel.send(date.toLocaleDateString("ja-JP"));
    }
    
    else if (command === `mods`){
        switch(args[0]){
            case ("add"):
                
               break; 
            case "ref":
                console.log("!");
                break;
            case "":
                console.log('"');
                break;
            default:
                message.channel.send("modsでしたいことを入力してください。\n add:modの追加\n ref:modのリンク参照\n :");
                break;
            }
    }

    else if (command === "args-info"){
       if (!args.length) {
           message.channel.send(`Enter args! ${message.author}`);
       } 
       message.channel.send(`Command: ${command}\nArgs: ${args}`);
    }
    console.log(`   DISCO: message processed   command:${command} ,args:${args}`);
});

client.login(token)
.then(console.log)
.catch(console.error);