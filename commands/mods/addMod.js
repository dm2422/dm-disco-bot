const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'UpdateJSON',
  description: 'Update Json file',
  execute(args) {
    let mods = JSON.parse(fs.readFileSync('./modsList.json'));
    if (mods[args[1]] === undefined) mods[args[1]] = {};
    for (let i = 1; i < args.length - 1; i++) {
      if (args[i] === '-v') {
        mods[args[1]].version = args[i + 1];
      }
      if (args[i] === '-l') {
        mods[args[1]].link = args[i + 1];
      }
    }

    fs.writeFileSync(
      path.resolve(__dirname, 'modsList.json'),
      JSON.stringify(mods, null, '  '),
      'utf-8'
    );
  },
};
