const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
const colors = require('colors');




console.clear();

// console.log( argv );
// console.log('base: yargs', argv.base );

crearArchivo( argv.b, argv.l, argv.h )
   .then( nombreArchivo => console.log(nombreArchivo, 'creado'.rainbow) )
   .catch( err => console.log(err) );