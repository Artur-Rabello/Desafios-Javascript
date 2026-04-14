const precoGasolina = 5.9;
const precoEtanol = 2.9;
const kmLitroGasolina = 10;
const kmLitroEtanol = 6;
const distanciaViagem = 200;
let combustivel = 'g';

if (combustivel === 'g'){
    total = (distanciaViagem / kmLitroGasolina) * precoGasolina;
}
else if(combustivel === 'e'){
    total = (distanciaViagem / kmLitroEtanol) * precoEtanol;
}
else{
    total = "tipo de combustivel invalido";
}


console.log('O preço total da viagem é : ');
console.log('R$ : ', total);
