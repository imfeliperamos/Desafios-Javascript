function avaliarAlunoAvançado(nome, nota1, nota2) {
    let media = ((nota1 + nota2) / 2).toFixed(2);
    let situacao = '';
    let desempenho = '';

    if  (nome == '') {
        console.log('Insira seus dados válidos.')
    } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        console.log(`Nota inválida para ${nome}`)
        situacao = 'Verifique sua nota.'
        desempenho = 'N/A'
    } else if (media >= 9) {
        desempenho = 'Excelente'
    } else if (media >= 7) {
        desempenho = 'Bom'
        situacao = 'Aprovado'
    } else if (media >= 5) {
        desempenho = 'regular'
        situacao = 'Recuperação'
    } else {
        desempenho = 'insuficiente'
        situacao = 'Reprovado'
    }

    console.log(`Aluno: ${nome}`)
    console.log(`Notas: ${nota1.toFixed(2)}, ${nota2.toFixed(2)}`)
    console.log(`Média: ${media} | Situação: ${situacao} | Desempenho: ${desempenho}`)
    console.log('------------------------------------------------------------------')

}

avaliarAlunoAvançado('Joao', 6.53, 8.35)
avaliarAlunoAvançado('Felipe', -7, 8.2)
avaliarAlunoAvançado('Ana', 4.64, 7.5)
avaliarAlunoAvançado('Pedro', 6.2, 2.98)