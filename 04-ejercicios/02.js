/* 
Nombre: ancho x alto
* 8K 7680 x 4320
* 4K 3840 x 2160
* EQHD 2560 X 1440
* FHD 1920 x 1080
* HD 1280 X 720 
*/

function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >=  4320) {
      return "8K";
    } else if (ancho >=  3840 && alto >=  2160) {
      return "4K";
    } else if (ancho >=  2560 && alto >=  1440) {
      return "EQHD";
    } else if (ancho >=  1920 && alto >=  1080) {
      return "FHD";
    } else if (ancho >= 1280 && alto >=  720) {
      return "HD";
    } else {
      return "Desconocido"; // En caso de que las dimensiones no coincidan con ninguna resolución conocida
    }
  }
  
  let nombre = nombreResolucion(2500, 1508);
  console.log(nombre);
  
