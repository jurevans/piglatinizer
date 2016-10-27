module.exports = (() => {

    let _getVowels = () => {
        return ['a', 'e', 'i', 'o', 'u', 'y'];
    };

    let pigLatinizer = (sentence='') => {
        return sentence.toLowerCase().split(/\s+/).map( w => {
                return (_getVowels().indexOf( w.split('')[0] ) > -1
                        || _getVowels().indexOf( w.split('')[1] ) > -1
                    ? w.slice(1) + w.slice(0, 1)
                    : w.slice(2) + w.slice(0, 2)
                ) + 'ay';
            }
        ).join(' ');
    };

    return {
        pigLatinizer : pigLatinizer
    };

})();
