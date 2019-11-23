module.exports = {
  name: 'ping',
  description: 'returns PONG',
  execute(message) {
    console.log('executing ping');
    message.channel.send('PONG');
  },
};
