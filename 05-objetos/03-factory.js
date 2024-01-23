//con esta funcion no es necerario crear muchos usruarios asi con codigo
//me ayudara a ser mas eficiente
function crearUsuario (name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave...');
        },
    }; 
}
//aqui creo los usuarios 
let user1 = crearUsuario('Adonay', 'rodvilemus85@gmail.com')
let user2 = crearUsuario('Rosvin', 'rosvin85@gmail.com')
console.log(user1,user2); //imprimo los usuarios

