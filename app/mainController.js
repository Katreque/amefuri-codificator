var _parseUrlEntrada = function(nome, url) {
    nome = nome.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + nome + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) {
        return null;
    }

    if (!results[2]) {
        return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var interceptaUrl = function(url) {
    return new Promise((resolve, reject) => {
        let _tipo = _parseUrlEntrada('tipo', url);
        
        if (!_tipo) {
            return reject();
        } else {
            let urlCodificada = _parseUrlEntrada('url', url);
            decodificar(urlCodificada.toString())
                .then((urlDecodificada) => {
                    return resolve(urlDecodificada);
                })
                .catch((err) => {
                    return reject(err); 
                })
        }
    })
    
}