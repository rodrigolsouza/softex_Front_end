var tempo=(prompt("Informa o tempo inicial(positivo) do contador regressivo: "));
parseInt(tempo);

console.log(typeof(tempo));

function mensagem(tempoI){
    console.log(`${tempoI}`)
}

console.log("Iniciando contagem regressiva")
for (var i=tempo; i==0; i--){
    setTimeout(mensagem(i),1000)
    if(tempo==0){
        console.log("booooom!")
    }
}
