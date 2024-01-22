/* 
Crear arrray de longitud N, y que sus elementos sean 
numeros de 1 hasta N
*/

let longitud = 7;

function crearArray(n) {
    let nuevoArray = [];
    for(let i = 1; i<= n; i++){
        nuevoArray.push(i);
    }
    return nuevoArray

}
let resultado = crearArray(longitud);
console.log(resultado);
























