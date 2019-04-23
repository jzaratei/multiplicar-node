const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base}*${index} = ${index*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)
        });

    });
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        console.log('================================'.green);
        console.log(`=======Tablae de ${base}========`.green);
        console.log('================================'.green);

        for (let index = 1; index < limite; index++) {
            resolve(console.log(`${base}*${index} = ${index*base}\n`));
        }


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}