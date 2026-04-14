let preco = 100;
let forma = 4;
let total = 0;

if(forma === 1){
    total = preco - (preco * 0.10);
}
    
else if(forma === 2){
    total = preco - (preco * 0.15);
}

else if(forma === 3){
    total = preco;
}

else if(forma === 4){
    total = preco + (preco * 0.10);
}

else{
    console.log("forma de pagamento invalida");
}

console.log("Forma de pagamento : ", forma, "Total : ", total);