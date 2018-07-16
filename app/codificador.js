var codificar = function(string) {
  let stringCodificada = "AmeLink:";

  for(let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    stringCodificada += char + 1000;
  }

  return stringCodificada;
}
