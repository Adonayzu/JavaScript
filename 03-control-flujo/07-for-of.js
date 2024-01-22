// while
// do while
// for

let animales = ['Perro', 'Dragón','Gato'];

//con este for of imprimi todos los animales del arrays
for (let animal of animales) {
    console.log(animal);
}

let i = 0;
while (i < animales.length){ // y el animales.length es para la longitud del arrays
    console.log(animales[i]);
    i++; // esto sirve en el while para que no se vuelva infinito
}
