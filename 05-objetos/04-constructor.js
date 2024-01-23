// para crear funciones de constructoras se espera que inicien con mayuscula
//UpperCanelCase

// {id:1, recuperarClave: function(){}}
function Usuario () {
    this.id =1;
    this.recuperarClave =function(){  //metodos ya no es funcion en este caso
        console.log('recuperando clave...');

    }
}

//aqui es importante el new suceden 4 cosas
// se crea una propiedad en el aire, se vincula el propotipo de la funcion con el objeto
// despues al objeto vacio se le coloca el this, retorna de forma automatica el this
let usuario = new Usuario(); // {}, prototipo, this ={}, retorna this

console.log(usuario);