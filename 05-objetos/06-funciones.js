//funcion constructora
function Usuario(nombre){
    this.nombre = nombre;

}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Adonay');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);

}

let user1 = of(Usuario, 'Rosvin');
console.log(user1);

//retorna el esto
function returned(){
    return function(){
        console.log('Hola Mundo');

    }
}

let saludo = returned();
saludo();