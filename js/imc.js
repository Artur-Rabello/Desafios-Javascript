const altura = 1.70;
const peso = 70;
let imc;
let situação;

imc = peso / Math.pow(altura, 2) ;

if(imc < 18.5){
    situação = 'Abaixo do peso';
}

else if(imc >= 18.5 && imc <= 25 ){
    situação = 'peso normal';
}

else if(imc > 25 && imc <= 30 ){
    situação = 'Acima do peso';
}

else if(imc > 30 && imc <= 40 ){
    situação = 'Obeso';
}

else{
    situação = 'Obesidade grave';
}

console.log("A pessoa de altura : ", altura, "E peso : ", peso , "Se encaixa na categoria : ", situação );