// Para enlistar algo es mejro el for of esto solo lo esy¿toy aprendiendo 
//para saber algo sobre eso por si me topo con un codigo qu lleve eso

// Aqui se pone coma porque se creo un asuario solo al final en } lleva ;
let user = {
    id: 1,
    name: 'Adonay Zuñiga', 
    age: 25,
};

// agrego una propiedad o puede llevar cualquier nombre y el in
// para ver de donde sacara la informacion
for (let prop in user) {
    console.log(prop, user[prop]); //aqui imprimimos la propiedad o prop y me imprime el contenido de user tambien el contenido de user

}

let animales = ["Perro",'Dragón','Gato'];
for (let indice in animales){
    console.log(indice, animales[indice]);

}
    