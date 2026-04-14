function pares(numeros, tam){
    for(let i = 0; i < tam; i++){
        if((numeros[i] % 2) == 0 ){
            let resultado = numeros[i];
            console.log("Numero par : ", resultado)
        }
    }
}

function main(){
    const numeros = [1, 2, 1, 4, 5, 5, 5, 8, 10, 14];
    const tam = numeros.length;
    pares(numeros, tam);
}
main();