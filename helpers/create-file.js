const fs = require('fs');
const colors = require('colors');

const createFile = async (base, listar = false, hasta = 10) => {

    try {

        let exit = '';
        let file = `./exit/tabla-${base}.txt`

        for (let index = 1; index <= hasta; index++) {
            exit += `    ${base} X ${index} = ${base * index}\n`;
        }

        if (listar) {
            console.log('===================='.green);
            console.log('    Tabla del '.green, colors.yellow(base));
            console.log('===================='.green);
            console.log(exit);
            console.log('====================\n'.green);
        }
        
        fs.writeFileSync(file, exit) 

        return file;
    } catch (error) {
        throw error
    }
    
}

module.exports = {
   createFile
}