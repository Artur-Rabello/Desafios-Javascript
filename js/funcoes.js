function SayMyName(name) {
    return name;   
}

function quadrado(num, potencia) {
    return Math.pow(num, potencia);
}

function caucularJuros(valor, porcentagemJuros) {
    juros = (porcentagemJuros/100) * valor;
    return juros + valor;
}

function main() {
    
    console.log("Exibir Nome");

    nome = SayMyName("ARTUR");

    console.log("My name is", nome);

    console.log("===================");

    console.log("Elevar ao Quadrado");

    total = quadrado(10, 2);

    console.log(total);

    total = quadrado(10, 3);

    console.log(total);

    total = quadrado(quadrado(10, 2), 2);

    console.log(total);

    console.log("===================");

    console.log("Caucular juros");

    totalComJuros = caucularJuros(200, 15);

    console.log("Valor com juros : ", totalComJuros);

    console.log("===================");
}

main();