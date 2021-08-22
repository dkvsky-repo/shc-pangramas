/**
 * Función para sustituir caracteres especiales: áéíóúü.
 *
 * @param {String} cadenaDeTexto La cadena de texto a evaluar.
 * @returns String Devuelve la misma cadena con los caracteres
 * sustituidos por aeiou (sin acento o diéresis) donde aplica.
 */
export function sustituirCaracteresEspeciales(cadenaDeTexto) {
  let n = cadenaDeTexto.toLowerCase();

  const caracteresEspeciales = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    ü: 'u',
  };

  const regexp = /á|é|í|ó|ú|ü/g;
  const matches = n.matchAll(regexp);

  n = [...n];
  for (const match of matches) {
    for (const c in caracteresEspeciales) {
      if (match[0] === c) {
        n[match.index] = caracteresEspeciales[c];
      }
    }
  }

  return n.join('');
}

/**
 * Funcion esPangrama recibe cadena de texto y determina si
 * es pangrama o no.
 *
 * @param {String} cadenaDeTexto La cadena de texto a evaluar.
 * @returns Boolean True si es pangrama, o False en caso contrario.
 */
export function esPangrama(cadenaDeTexto) {
  // 1. verificar longitud de la cadena
  if (cadenaDeTexto.length < 27) {
    return false;
  }
  // 2. definir el arreglo alfabeto
  const alfabeto = [...'abcdefghijklmnñopqrstuvwxyz'];

  // 3. sustituir caracteres especiales: á,é,í,ó,ú,ü y guardar como array
  let textoSinCaracteresEspeciales = [
    ...sustituirCaracteresEspeciales(cadenaDeTexto),
  ];

  // 4. eliminar duplicados
  textoSinCaracteresEspeciales = [...new Set(textoSinCaracteresEspeciales)];

  // 5.Verificar si cada letra del alfabeto esta contenida en la cadena de texto - terminar en cuanto una letra no se encuentre
  const textoContieneLetra = (letra) =>
    textoSinCaracteresEspeciales.includes(letra);

  const resultado = alfabeto.every(textoContieneLetra);

  return resultado;
}
