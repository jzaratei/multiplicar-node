const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(console.log(`Lista de la tabla-${argv.base} hasta ${argv.limite}  `))
            .catch(e => console.log(e))
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.blue}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('comando no reconocido');
}