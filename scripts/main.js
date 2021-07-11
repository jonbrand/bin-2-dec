/*function convertDec() {
    var decNumber = document.getElementById('decInput').value;
    var restNumbs = [];
    var rest = '';
    var bin = '';

    // enquanto for menor que 0, arredonde para baixo, atribuindo o resto da divisao por 2.
    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restNumbs.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }

    while(restNumbs.length > 0) {
        bin += restNumbs.pop().toString();
    }

    document.getElementById('binInput').value = bin;
} */


function convertBin() {
    var binNumber = document.getElementById('binInput').value;

    var dec = parseInt(binNumber, 2);

    document.getElementById('decInput').value = dec;
    
}

/* 
    function that blocks the user input, allowing only as key 48 and key 49 of the user, which
    correspond to 1 and 0
*/
function setBinaryText(e) {
    var key = (window.event)?e.keyCode:e.which;

    if (( key == 48 || key == 49)) return true;
        else{
            return false;
    }
}