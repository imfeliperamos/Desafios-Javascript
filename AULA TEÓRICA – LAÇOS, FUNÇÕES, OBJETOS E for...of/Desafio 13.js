function analisarTexto(texto) {
    
    console.log(`Quantidade de caracteres: ${texto.length}`) // Exibe a quantidade total de caracteres na string
    console.log(`Frase toda em maiúsculo: ${texto.toUpperCase()}`) // Exibe a string toda em letras maiúsculas
    console.log(`A frase toda em minúsculo: ${texto.toLowerCase()}`) // Exibe a string toda em letras minúsculas
    console.log(`posição da minha letra 'a': ${texto.indexOf('a')} `) // Exibe a posição da primeira ocorrência da letra 'a' (minúscula) na string
    console.log(`Primeiros 10 caracteres: ${texto.slice(0, 10)}`) // Exibe os primeiros 10 caracteres da string
    console.log(`Palavras da frase: ${texto.split(' ')}`) // Divide a string em um array de palavras, usando o espaço como separador e exibe o array

}

analisarTexto('A lógica de programação é essencial!') // Chama a função passando a string como argumento