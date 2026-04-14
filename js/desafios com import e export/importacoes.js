const entradas = [2, 48, 22, 98, 70];
let i = 0

function gets (){
    const valor = entradas[i]; 
    i++;
    return valor;
}

function print (txt){
    console.log(txt
    )
}

module.exports = {gets, print};