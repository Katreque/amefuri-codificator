var _lowerCaseSecret = function() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
}

var _uperCaseSecret = function() {
    return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}

var _numberSecret = function() {
    return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
}

var equivalenteConversaoArray = function(char, tipo) {
    let _size = 0;
    let _array;

    switch (tipo) {
        case 0:
            _size = 26;
            _array = _lowerCaseSecret();
            break;

        case 1:
            _size = 26;
            _array = _uperCaseSecret();
            break;

        case 2:
            _size = 10;
            _array = _numberSecret();
            break;
    }

    for(let i = 0; i < _size; i++) {
        if (char === _array[i]) {
            return _array[(_size - 1) - i];
        }
    }
}