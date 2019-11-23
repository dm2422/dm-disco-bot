module.exports = {
    name:"today",
    // eslint-disable-next-line no-unused-vars
    exports(message, args){
        const date = new Date();
        message.channel.send(date.toLocaleDateString("ja-JP"));
    }
};