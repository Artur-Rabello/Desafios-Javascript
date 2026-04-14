function adulto(age){
    if (age < 18){
        idade = "menor de idade";
    }
        else{
        idade = "Maior de idade";
    }
    return idade;
}

console.log(adulto(19));