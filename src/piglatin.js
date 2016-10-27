module.exports = (function() {

    _getVowels = function () {
        return ['a', 'e', 'i', 'o', 'u', 'y'];
    };

    this.pigLatinizer = function (sentence) {
        return sentence.toLowerCase().split(' ').map( w => {
                return (_getVowels().indexOf( w.split('')[0] ) > -1
                        || _getVowels().indexOf( w.split('')[1] ) > -1
                    ? w.slice(1) + w.slice(0, 1)
                    : w.slice(2) + w.slice(0, 2)
                ) + 'ay';
            }
        ).join(' ');
    };

    return this;

})();
