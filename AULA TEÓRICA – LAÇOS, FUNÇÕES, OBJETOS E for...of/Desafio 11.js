function classificarVelocidade(velocidade) {
    let velo = ''; // Declaração fora do bloco if
    let classificacao = ''; // Declaração fora do bloco if

    if (velocidade <= 0) {
        console.log('Velocidade inválida.');
        return; // Encerra a função para evitar continuar
    } else if (velocidade <= 40) {
        velo = `${velocidade} km/h`; // Atribui o valor à variável
        classificacao = 'Velocidade lenta';
    } else if (velocidade >= 41 && velocidade <= 70) {
        velo = `${velocidade} km/h`;
        classificacao = 'Velocidade moderada';
    } else if (velocidade >= 71 && velocidade <= 120) {
        velo = `${velocidade} km/h`;
        classificacao = 'Velocidade alta';
    } else {
        velo = `${velocidade} km/h`;
        classificacao = 'Perigo! Velocidade excessiva.';
    }

    // Usa as variáveis na saída final
    console.log(`Velocidade: ${velo} | Classificação: ${classificacao}`);
    console.log('´----------------------------------------------------')
}

// Teste da função
classificarVelocidade(154);
classificarVelocidade(44);
classificarVelocidade(38);
classificarVelocidade(85);

