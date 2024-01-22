

//El break y el continue se usa para for, for in, for of, do while
let i = 0;
while (i < 6) {
    i++;
    if (i === 2) { ///aqui imprime todos los numero menos el 2 porque asi loo dice la operacion
        continue;
    }
    if (i === 4){
        break;   // y aqui con el break si encuentra el 4 por eso solo imprime el 1 y el 3 porque el 2 por el codigo de arriba no aparece
    }
    console.log(i);    
}
