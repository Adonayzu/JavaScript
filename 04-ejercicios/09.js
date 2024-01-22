/* 
Crear algoritmo que devuelva un arrray
de objetos en base a pares
 */

let pares = [
    [1, {name:"Adonay"}],//  lo demas el objeto completo
    [2, {name:"Doris"}],
    [3, {name:"Tania"}],

];

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

function toCollection(arr) {
    let collection = [];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection [idx].id = elemento[0];
    }
    return collection;

}

let resultado =toCollection(pares);
console.log(resultado);











