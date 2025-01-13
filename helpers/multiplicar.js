const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

   console.log(hasta)

   try {

      let salida = '';
      let consola = '';
   
      for (let i = 1; i <= hasta; i++) {
         salida += `${base} x ${ i } = ${ i * base }\n`;
         consola += `${base} ${'x'.cyan} ${ i } ${'='.cyan} ${ i * base }\n`;
      }
      
      if( listar ) {
         console.log('=================='.blue);
         console.log('  Tabla del:'.green, base);
         console.log('=================='.blue);
         console.log(consola);
      }
      
      fs.writeFileSync( `./salida/tabla_${ base }.txt`, salida );
      
      return `tabla-${ base }.txt`;

   } catch (error) {
      throw err
   }

}

module.exports = {
   crearArchivo,
}