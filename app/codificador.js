var codificar = function(string) {
  let stringCodificada = "https://amefuricodificator.netlify.com?tipo=cod&url=";

  for(let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    stringCodificada += char + 1000;
  }

  return stringCodificada;
}
