function imcCalc(peso, altura) {
    imc = peso / Math.pow(altura, 2);
    return imc;    
}

function verificarSituacao(imc) {
    if(imc < 18.5){
        situacao = 'Abaixo do peso';
    }

    else if(imc >= 18.5 && imc <= 25 ){
        situacao = 'peso normal';
    }

    else if(imc > 25 && imc <= 30 ){
        situacao = 'Acima do peso';
    }

    else if(imc > 30 && imc <= 40 ){
        situacao = 'Obeso';
    }

    else{
        situacao = 'Obesidade grave';
    }

    return situacao;
}

function main() {
    peso = 72;

    altura = 1.70;

    imc = imcCalc(peso, altura);

    situacao = verificarSituacao(imc);

    console.log("A pessoa de imc :", imc, "Se encaixa na categoria :", situacao );
}

main();
