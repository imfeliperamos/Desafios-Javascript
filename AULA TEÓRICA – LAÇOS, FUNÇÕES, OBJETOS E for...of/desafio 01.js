// 📌 7. Exercício de fixação (sugestão para fazer depois)
// Monte uma função chamada mostrarResumoAluno(aluno) que:
// Recebe um objeto com nome, nota1 e nota2
// Calcula a média
// Classifica a situação (aprovado, recuperação ou reprovado)
// Usa for...of para aplicar a função a um array de alunos



let alunos = [
    { nome: "", nota1: 4.434646365365, nota2: 5.6345 },
    { nome: "Maria", nota1: 5, nota2: 6 },
    { nome: "Pedro", nota1: 9, nota2: 10 }
];

function mostrarResumoAluno(alunos) {

    for (let aluno of alunos) {
        let media = (aluno.nota1 + aluno.nota2) / 2
        let situacao = 'N/A.';


        if (aluno.nome == '') {
            console.log('Nome inválido.')
            situacao = 'N/A.'
        } else if (media >= 7) {
            situacao = 'Aprovado.'
        } else if (media >= 5) {
            situacao = 'Recuperação.'
        } else {
            situacao = 'Reprovado.'
        }

        console.log(`Aluno: ${aluno.nome}`)
        console.log(`Situação: ${situacao}`)
        console.log(`Média: ${media.toFixed(2)}`)
        console.log(`Sua 1° Nota: ${aluno.nota1.toFixed(2)} | Sua 2° Nota: ${aluno.nota2.toFixed(2)}`)
        console.log(`-------------------------`)
    }
}

mostrarResumoAluno(alunos);