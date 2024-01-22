// primera forma
console.log('Primera forma de buscar cual es el mayor')
function cualEsMayor(a, b){
    if (a > b){
        return a;
        
    }else{
        return b;
    }

}

let mayor = cualEsMayor(2,5);

console.log(mayor);

//segudna forma de ver el mayor

console.log('segunda forma de buscar cual es el mayor')
function cualEsMayor(a, b){
    return (a > b) ? a : b; // esta forma es mas eficiente
   

}

let mayorDeNumero = cualEsMayor(15,5);

console.log(mayorDeNumero);

