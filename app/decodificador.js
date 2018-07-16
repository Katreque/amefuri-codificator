var decodificar = function(string) {
  let stringDecodificada = "";

  for(let i = 8; i < string.length; i+=4) {
    let char = string[i] + string[i+1] + string[i+2] + string[i+3];
    char = char - 1000;
    stringDecodificada += String.fromCharCode(char);
  }

  return stringDecodificada;
}
