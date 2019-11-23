const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
let mods = JSON.parse(
    fs.readFileSync(
        path.resolve(__dirname, "modsList.json")
    )
);

const client = new Discord.Client();
const addMod = require("./addMod");

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
                if (!(mods[args[1]]===undefined)) message.channel.send("そのmodはもう登録されています！！");
                else {
                    addMod.execute(mods,args);
                    const date = new Date();
                    message.channel.send(`accepted ${args[1]} on ${date.toLocaleTimeString("ja-JP")}`);
                }
                console.log(mods[args[1]]);
                
                break; 
            case "link":
                message.reply(mods[args[1]].link);
                console.log("!");
                break;
            case "version":
                try {message.reply(mods[args[1]].version);}
                catch(TypeError) {message.reply("そんなmodはありません");}
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