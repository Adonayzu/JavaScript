/* 
Crear un algoritmo que tome un array de 
objetos y devuelva un array de pares
 */

//estos tres son los objetos
let array = [{
    id:1,
    name : 'Adonay',
},{
    id:2,
    name : 'Doris',
}, {
    id:3,
    name : 'Tania',

}];

let pares = [
    [1, { id : 1, name:"Adonay"}],// el primero es el id y lo demas el objeto completo
    [2, { id : 2, name:"Doris"}],
    [3, { id : 3, name:"Tania"}],

];

function toParis(arr){
    let pares = arr.map(obj => [obj.id, obj]);
    return pares;

}

let resultado = toParis(array);
console.log(resultado);
















