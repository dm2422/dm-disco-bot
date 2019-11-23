<<<<<<< HEAD
module.exports = {
    name: "mods",
    description: "anyting related to mods.",execute(args,mods,message){
    switch(args[0]){
        case ("add"):
            if (!(mods[args[1]]===undefined)) message.channel.send("そのmodはもう登録されています！！");
            else {
                addMod(mods,args);
                message.channel.send("accepted!!");
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
}
=======
module.exports = {
    
    name: "mods",
    description: "anyting related to mods.",
    execute(args,mods,message){
        const addMod = require("./addMod");
        switch(args[0]){
        case ("add"):
            if (!(mods[args[1]]===undefined)) message.channel.send("そのmodはもう登録されています！！");
            else {
                addMod(mods,args);
                message.channel.send("accepted!!");
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
};
>>>>>>> moved from another repo
