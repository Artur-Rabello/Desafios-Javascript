// Programa que utiliza duas funcoes, a funcao da media, que recebe uma lista como parametro, soma cada elemento e divide
// pelo tamanho da lista, retorna a media.
// e a funcao classificar que recebe a media define a media em aprovado, reprovado e recuperacao.

function fazerMedia(notas){
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
        
    }

    let media = (soma / notas.length);
    return media;
}

function classificarMedia(media){
    let situacao;
    if(media < 4){
        situacao = 'Reprovado';
    }

    else if(media >= 4 && media < 6 ){
        situacao = 'Exame';
    }

    else if(media >= 6 && media <= 10 ){
        situacao = 'Aprovado';
    }

    else{
        situacao = 'Invalida';
    }

    return situacao;
}

function main(){

    const notas = [];

    notas.push(3)
    notas.push(4)
    notas.push(9)
    notas.push(2)
    notas.push(6)

    let media = fazerMedia(notas);
    console.log("A media é ", media);

    let situacao = classificarMedia(media);
    console.log("A situaçao do aluno é ", situacao);

}

main();
