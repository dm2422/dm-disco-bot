const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const getFiles = require('./tools/getFiles');

const client = new Discord.Client();
const commandList = getFiles.execute('commands', 'js', __dirname);

client.once('ready', () => {
  console.log('OKOKOK!!!!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    console.log('PASSED');
    return;
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  console.log(`will execute ${command}`);

  console.log(commandList);
  if (!commandList[command]) return;

  commandList[command].execute(message, args);

  console.log(`   DISCO: message processed   command:${command} ,args:${args}`);
});

client
  .login(token)
  .then(console.log)
  .catch(console.error);
