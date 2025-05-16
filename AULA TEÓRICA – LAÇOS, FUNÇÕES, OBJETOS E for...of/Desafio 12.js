function verificarTemperatura(temperatura) {

    if (temperatura <= 25 || temperatura >= 43){
        console.log('Temperatura Inválida.')
        return;
    }

    if (temperatura < 35.0) {
        console.log(`Temperatura: ${temperatura} | Classificação: Hipotermia.`)
    } else if (temperatura <= 37.5) {
        console.log(`Temperatura: ${temperatura} | Classificação: Temperatura normal.`)
    } else if (temperatura <= 39.0) {
        console.log(`Temperatura: ${temperatura} | Classificação: Febre Leve.`)
    } else if (temperatura <= 40.9) {
        console.log(`Temperatura: ${temperatura} | Classificação: Febre Alta.`)
    } else {
        console.log(`Temperatura: ${temperatura} | Classificação: Hipertermia grave.`)
    }
}

verificarTemperatura(34.9); // Hipotermia
verificarTemperatura(36.5); // Temperatura normal
verificarTemperatura(38);   // Febre leve
verificarTemperatura(40);   // Febre alta
verificarTemperatura(42);   // Hipertermia grave
verificarTemperatura(-2);   // Inválida