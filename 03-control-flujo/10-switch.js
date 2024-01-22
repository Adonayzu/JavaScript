//El switch es casi igual al if y else 
let accion = 'listar';
 
switch (accion){
    case 'listar':
        console.log('acción de listar');
        break;    // cuando lleva el case es necesario el break porque asi se ve si se cumple para avazar a lo siguiente
    case 'guardar':
        console.log('Acción de guardar');
        break; 
    default: // el defaul nos sirve si ningun case se cumple tiere este msj 
        console.log('Acción no reconocida');
}



