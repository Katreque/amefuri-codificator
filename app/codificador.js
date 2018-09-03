var codificar = function(string) {
  let stringCodificada = "https://amefuricodificator.netlify.com?tipo=cod1&url=";

  for(let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char === "?" || char === "/" || char === "." || char === ":" || char === "#") {
      stringCodificada += char;
      continue;

    } else if (!isNaN(char*1)){
      stringCodificada += equivalenteConversaoArray(char, 2)
      continue;

    } else if (char == char.toUpperCase()) {
      stringCodificada += equivalenteConversaoArray(char, 1)
      continue;

    } else if (char == char.toLowerCase()) {
      stringCodificada += equivalenteConversaoArray(char, 0)
      continue;

    } else {
      stringCodificada += char;
    }
  }

  return stringCodificada;
}
