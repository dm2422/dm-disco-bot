module.exports = {
  name: 'args-info',
  execute(message, args) {
    if (!args.length) {
      message.channel.send(`Enter args! ${message.author}`);
    }
    message.channel.send(`Command: ${args[0]}\nArgs: ${args}`);
  },
};
