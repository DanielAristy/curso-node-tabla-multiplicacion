const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
        type: 'number'

    })
    .option('l',{
        alias: 'listar',
        describe: 'Muestra la tabla en consola',
        default: false,
        type: 'boolean'
    })
    .option('h',{
        alias: 'hasta',
        default: 10,
        describe: 'Numero hasta el cual se va a multiplicar',
        type: 'number'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser numerica'
        }
        if (isNaN(argv.h)) {
            throw 'Este parametro debe ser numerico, hace referencia hasta donde se debe multiplicar'
        }
        return true
    })
    .argv;

    module.exports = argv;