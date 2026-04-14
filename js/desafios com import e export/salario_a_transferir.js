const { gets, print } = require('./funcoes_salario_a_transferir');

function caucularPorcentagem(valor){
    if(valor <= 1100){
        valorImposto = (valor * 0.05);
    } 
    else if(valor > 1100 && valor <= 2500){
        valorImposto = (valor * 0.10);
    }
    else if(valor > 2500){
        valorImposto = (valor * 0.15);
    }
    return valorImposto;
}

function main(){
const [bruto, beneficios] = gets();
let impostos = 0;
let total = 0;

impostos = caucularPorcentagem(bruto);

total = (bruto - impostos + beneficios)
print(total)
}

main();