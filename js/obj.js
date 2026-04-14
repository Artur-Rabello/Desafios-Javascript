const artur = {
    nome : 'Artur R. de oliveira',
    idade : 18,
/*metodo*/
    descrever: function(){
        console.log("O nome é : ", this.nome);
        console.log("idade é : ", this.idade);
    }
};

artur.descrever();

console.log(artur['nome']);