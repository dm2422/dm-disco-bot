const Discord = require("discord.js");
const {
  prefix,
  token
} = require("./config.json");
const getModules = require("./tools/getModules");
const client = new Discord.Client();
const commandList = getModules.execute("commands", "js", __dirname);
client.once("ready", () => {
  console.log("OKOKOK!!!!");
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  console.log(`will execute ${command}`);
  console.log(commandList);
  
  if (!commandList[commandName]) return;
  const command = commandList[commandName];
  try {
    command.execute(message, args);
    console.log(`   DISCO: message processed   command:${command} ,args:${args}`);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing command")
  }
});

client
  .login(token)
  .then(console.log)
  .catch(console.error);