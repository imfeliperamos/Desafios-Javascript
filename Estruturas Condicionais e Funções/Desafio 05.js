function avaliarAluno(nome, nota1, nota2) {


    let media = (nota1 + nota2) / 2
    let situacao = '';

    if (media >= 7) {
        situacao = 'Aprovado'
    } else if (media >= 5) {
        situacao = 'Recuperação'
    } else {
        situacao = 'Reprovado'
    }

        console.log(`Aluno ${nome} tem média ${media.toFixed(2)} | ${situacao}`)
}


avaliarAluno('Felipe', 5, 8)
avaliarAluno('Ana', 4, 8)
avaliarAluno('João', 7, 9)
