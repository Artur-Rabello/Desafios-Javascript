const { gets, print } = require('./funcoes_MaiorPar_Menor_Impar');

function cauculos(){
    let maiorPar = 0;
    let menorImpar = 0;
    const n = gets();

    for (let i = 0; i < n; i++) {
        const numero = gets();

        if (numero % 2 === 0) {
            if(numero === 0 || numero > maiorPar){
                maiorPar = numero;
            }
        }
        else{
            if(menorImpar === 0 || numero < menorImpar){
                menorImpar = numero;
            }
        }
}
    print(maiorPar);
    print(menorImpar);
}

function main(){
    cauculos();

}

main();