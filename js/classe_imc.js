const {gets, print} = require('./importacoes');

class Pessoa{

    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descrever(){
        console.log("O ", this.nome, "tem peso : ", this.peso, "e altura : ", this.altura);
    }

    caucularImc(){
        let imc = (this.peso / Math.pow(this.altura, 2));
        console.log("O imc do ", this.nome,"é : ", imc);
        return imc;
    }

    classificarImc(imc){
        let situacao;
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

        console.log("A classificação de imc do ", this.nome, "é : ", situacao);
    }
}

const artur = new Pessoa('artur', 70, 1.70);
artur.descrever();
artur.classificarImc(artur.caucularImc());
