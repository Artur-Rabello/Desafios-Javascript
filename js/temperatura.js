function celcius(tInicial, temp){
    if(tInicial == "farenheit"){
        final = ((temp - 32) * (5/9));
        return final
    }
    else if(tInicial == "kelvin"){
        final = (temp - 273,15);
        return final
    }

}
function main(){

    const tempInicial = "kelvin";
    const tempDesejada = "celcius";
    const temperatura = 30;

    if (tempDesejada == "celcius"){
        const resultado = celcius("kelvin", temperatura);
    }

    else if (tempDesejada == "farenheit"){
        
    }

    else if (tempDesejada == "kelvin"){
        
    }

    console.log("O resultado de", temperatura, "em", tempInicial, "deu", resultado, "em", tempDesejada )

}

main()