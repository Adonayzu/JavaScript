/* 
* indice validar que no sea menor a cero y que el elemento 
exista en el array
 */

function getbyIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx){  //compara
        return  'Elemento no existe' ;
    }
    return arr[idx];

}



let resultado = getbyIdx([1 , 2], 0); // aqui entro al array el 0 e imprime el numero 1
console.log(resultado);








