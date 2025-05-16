function classificarVelocidade(velocidade){

    if (velocidade <= 0) {
        console.log('Velocidade inválida.')
        } else if (velocidade <= 40) {
        console.log(`Velocidade: ${velocidade} km/h | Classificação: Velocidade lenta.`)
        } else if (velocidade >= 41 && velocidade <= 70) {
        console.log(`Velocidade: ${velocidade} km/h | Classificação: Velocidade moderada`)
        } else if (velocidade >= 71 && velocidade <= 120) {
        console.log(`Velocidade: ${velocidade} km/h | Classificação: Velocidade alta`)
        } else {
        console.log(`Velocidade: ${velocidade} km/h | Classificação: Perigo! Velocidade excessiva.`)
        }

}

classificarVelocidade(454)
