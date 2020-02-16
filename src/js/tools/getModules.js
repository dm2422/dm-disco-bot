const fs = require('fs');
module.exports = {
  name: 'getModules',
  description: 'Get files',
  execute(folder, ext, cur_dir) {
    const list = fs
      .readdirSync(`${cur_dir}/${folder}`, 'utf-8')
      .filter(file => file.endsWith(`.${ext}`));

    const List = [];
    for (const file of list) {
      List[
        file.replace(`.${ext}`, '')
      ] = require(`${cur_dir}/${folder}/${file}`);
    }
    return List;
  },
};