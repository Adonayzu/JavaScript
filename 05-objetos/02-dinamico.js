// a una variable const no se le puede cambiar el valor a la variable
// pero si se puede agregarle y quitarle propiedades 
const user = {id: 1};

//aqui se agrego la propiedad de name solo se puede cambiar el valor
//de la propiedad si es un objeto
user.name ='Adonay';
user.guardar = function (){
    console.log('Guardando', user.name);
}

user.guardar();

//Aqui elimine la propiedad de name y guardar
delete user.name;
delete user.guardar;
console.log(user);






