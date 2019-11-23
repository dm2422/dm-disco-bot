const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const getFiles=require('./tools/getFiles');

const client = new Discord.Client();
const commandList=getFiles.execute("commands","js",__dirname);

client.once('ready', () => {
    console.log('OKOKOK!!!!');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!commandList[command]) return;

    commandList[command].execute(message, args);

    console.log(`   DISCO: message processed   command:${command} ,args:${args}`);
});

client.login(token)
.then(console.log)
.catch(console.error);