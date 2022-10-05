const {createFile } = require('./helpers/create-file');
const argv = require('./helpers/yargs/config');
const colors = require('colors');

console.clear()
createFile(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(colors.green(`${nameFile} creado`)))
    .catch(err => console.log(colors.red(err)))