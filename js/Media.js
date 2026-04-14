const n1 = 8;
const n2 = 15;
const n3 = 9;
let media;
let situação;

media = (n1 + n2 + n3) / 3;

if(media < 5){
    situação = 'reprovado';
}

else if(media >= 5 && media <= 7 ){
    situação = 'recuperação';
}

else if(media > 7 && media <= 10 ){
    situação = 'aprovado';
}

else{
    situação = 'media invalida';
}

console.log("O aluno de Media : ", media , "situação : ", situação )