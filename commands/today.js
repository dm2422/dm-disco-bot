module.exports = {
  name: 'today',
  // eslint-disable-next-line no-unused-vars
  execute(message, args) {
    console.log('executing today');
    const date = new Date();
    message.channel.send(date.toLocaleDateString('ja-JP'));
  },
};
