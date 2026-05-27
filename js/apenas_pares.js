// Programa que utiliza uma funcao que recebe como parametro uma lista de valores e o tamanho da lista.
// a funcao usa o tamanho da lista como condicao de parada no for que verifica se os numeros
// da lista sao pares ou nao, e imprime os pares

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
