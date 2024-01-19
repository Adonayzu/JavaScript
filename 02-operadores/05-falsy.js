// short-circuit

// falso valores qeu son falsos o falsy
// false
//0
//''
//null
//undefined
//NaN

let nombre = 'Adonay Zuñiga';
let username = nombre || 'Anonimo';  // me compara el or el anonimo o si hay un nombre y ya que hay un nombre me imprime el  nombre
console.log(username);

// aqui probaremo el and
function fn1() {
    console.log('soy funcion 1');
    return true;
}
//me imprime los dos por los dos son true
function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();