function calcularImc(peso, altura) {

    // Validação de entrada
    if (peso <= 0 || altura <= 0) {
        console.log('Por favor insira um valor correto.')
        return;

    }

    // Calculo de IMC
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log(`Abaixo do peso | Seu imc: ${imc.toFixed(2)}`)
    } else if (imc <= 24.9) {
        console.log(`Peso normal. | Seu imc: ${imc.toFixed(2)}`);
    } else if (imc < 30) {
        console.log(`Sobrepeso. | Seu imc: ${imc.toFixed(2)}`);
    } else {
        console.log(`Obesidade. | Seu imc: ${imc.toFixed(2)}`);
    }


}

calcularImc(70, 1.70)