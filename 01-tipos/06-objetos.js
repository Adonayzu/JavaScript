// personaje de tv
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad =16;

let personaje = {
    nombre: " Tanjiro",// aqui se agregan las coas que tiene el personaje solo que va con dos puntos y no con =
    anime: "Demos slayer", // y aqui adentro lleva solo la coma y no el punto y coma
    edad: 16,
};
console.log(personaje);// el console y lo demas es para imprimir en la 
console.log(personaje.nombre);// asi se imprime solo una llave o un valor por ejemplo nombre
console.log(personaje['anime'])// tambien esta forma de imprimir una propiedad

/* modificar una propiedad dos formas */
personaje.edad = 13;
personaje['edad']=15;

/* Eliminar una propiedad */
delete personaje.anime;

console.log(personaje);







