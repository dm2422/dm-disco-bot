const fs = require('fs');
module.exports= {
    name: "getFiles",
    description: "Get files",
    execute(folder, ext, cur_dir){
        const list=fs.readdirSync(`${cur_dir}/${folder}`,"utf-8").filter(file=> file.endsWith(`.${ext}`));
        const List=[];
        for (const file of list){
                List[file]=require(`./${folder}/${file}`);
            }
        return List;
    }
};