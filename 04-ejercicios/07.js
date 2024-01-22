/* 
* Crear algoritmo que devuelva el precio del producto
* mas impuesto
 */

function precioCompleto(precio, impuesto) {
   // Calcula el precio completo sumando el impuesto al precio original
   let precioCompleto= precio + (precio * impuesto);
   
   return precioCompleto;

}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);








