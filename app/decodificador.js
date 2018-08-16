var decodificar = function(string) {
  return new Promise((resolve, reject) => {
    let stringDecodificada = "";

    if (!string) {
      return reject();
    }
    
    for(let i = 52; i < string.length; i += 4) {
      let char = string[i] + string[i+1] + string[i+2] + string[i+3];
      char = char - 1000;
      stringDecodificada += String.fromCharCode(char);
    }
  
    return resolve(stringDecodificada);
  })
}
