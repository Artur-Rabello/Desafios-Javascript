class Pessoa{

    nome;
    idade; 
    anoNascimento;

    constructor(nome, idade, anoNascimento){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2026 - idade;
    }

    descrever(){
        console.log("O nome é : ", this.nome, "a idade é : ", this.idade, "ano de nascimento : ", this.anoNascimento);
    }
}

const artur = new Pessoa('Artur', 18, 2007);
artur.descrever();

const gustavo = new Pessoa('Gustavo', 12, 2014);
gustavo.descrever();

function compararPessoas(p1, p2){
    if (p1.idade < p2.idade){
        console.log("O ", p2.nome, "é o mais velho")
    }
    else if (p1.idade > p2.idade){
        console.log("O ", p1.nome, "é o mais velho")
    }
    else {
        console.log(p1.nome, "e", p2.nome, "tem a mesma idade ")
    }
}

compararPessoas(artur, gustavo);