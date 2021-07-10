function convert(decNumber) {
    var restNumbs = [],
    rest,
    bin = '';

    // enquanto for menor que 0, arredonde para baixo, atribuindo o resto da divisao por 2.
    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restNumbs.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }
    console.log(rest);
    console.log(restNumbs);
    console.log(decNumber);

    while(restNumbs.length > 0) {
        bin += restNumbs.pop().toString();
    }

    return bin;
}

console.log(convert(10));