var decodificar = function(string) {
  return new Promise((resolve, reject) => {
    let stringDecodificada = "";

    if (!string) {
      return reject();
    }

    for(let i = 0; i < string.length; i += 4) {
      let char = string[i] + string[i+1] + string[i+2] + string[i+3];
      char = char - 1000;
      stringDecodificada += String.fromCharCode(char);
    }

    return resolve(stringDecodificada);
  })
}

var decodificarV1 = function(string) {
  return new Promise((resolve, reject) => {
    let stringDecodificada = "";

    if (!string) {
      return reject();
    }

    for(let i = 0; i < string.length; i++) {
      let char = string[i];

      if (char === "?" || char === "/" || char === "." || char === ":" || char === "#" || char == "_" || char == "=" || char == "+" || char == "-") {
        stringDecodificada += char;
        continue;

      } else if (!isNaN(char*1)){
        stringDecodificada += equivalenteConversaoArray(char, 2)
        continue;

      } else if (char == char.toUpperCase()) {
        stringDecodificada += equivalenteConversaoArray(char, 1)
        continue;

      } else if (char == char.toLowerCase()) {
        stringDecodificada += equivalenteConversaoArray(char, 0)
        continue;

      } else {
        stringDecodificada += char;
      }
    }

    return resolve(stringDecodificada);
  })
}
