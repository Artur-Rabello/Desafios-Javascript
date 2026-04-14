class Carro{

    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    descrever(){
        console.log("A marca é : ", this.marca, "a cor é : ", this.cor, "e o gasto medio é : ", this.gastoMedio);
    }

    caucularViagem(distancia, preco){
        let total = ((distancia / this.gastoMedio) * preco)
        console.log("O total da viagem é R$ : ", total)
    }
}

const hb20 = new Carro('hyunday', 'preto', 2);
hb20.descrever();
hb20.caucularViagem(100, 6);