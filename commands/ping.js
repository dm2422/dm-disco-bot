module.exports = {
    name: "ping",
    description: "returns PONG",
    execute(message){
        message.channel.send("PONG");
    }
};