var nota1 = 4;
var nota2 = 10;
var mediaCalculo = (nota1 + nota2) / 2;

if (mediaCalculo >= 7) {
    console.log(`Aprovado - sua média é de: ${mediaCalculo.toFixed(2)}`)
} else if (mediaCalculo >= 5) {
    console.log(`Recuperação - sua média é de: ${mediaCalculo.toFixed(2)}`)
} else {
    console.log(`Reprovado - sua média é de: ${mediaCalculo.toFixed(2)}`)
}