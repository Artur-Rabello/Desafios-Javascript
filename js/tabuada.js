function fazerTabuada(numeros){
    for (let i = 0; i < 10; i++){
        console.log("Tabuada do ",numeros[0]);
        let soma = (numeros[0] * (i+1)); 

        console.log(numeros[0], "X", i+1, "=", soma);
    }
}
function main(){
    const numeros =[];
    numeros.push(2);
    fazerTabuada(numeros);
}

main();