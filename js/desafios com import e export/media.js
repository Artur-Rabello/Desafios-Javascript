const { gets, print } = require('./funcoes_auxiliares_ex_media');

function classificarMedia(valor){
    if(valor < 5){
        situacao = "Reprovado";
    }  
    else if(valor >= 5 && valor < 7 ){
        situacao = "Exame";
    }
    else if(valor >= 7 && valor <= 10 ){
        situacao = "Aprovado";
    }
    else{
        situacao = "invalido";
    }
    return situacao;
}

function main(){
    const media = gets();
    const clasificacao = classificarMedia(media);
    print(media);
    print(clasificacao);
}
main();