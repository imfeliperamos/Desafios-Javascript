// Crie um array de 4 objetos representando alunos, e use for...of para exibir:
// Nome do aluno
// Média entre duas notas
// Situação (aprovado, recuperação, reprovado)
// Só exiba se o nome for válido e as notas forem entre 0 e 10.

let alunos = [
    { nome: "Ana", nota1: 84, nota2: 7 },    // Média: 7.5 (Aprovado)
    { nome: "Bruno", nota1: -5, nota2: 5 },  // Média: 5.5 (Recuperação)
    { nome: "Carlos", nota1: 4, nota2: 3 }, // Média: 3.5 (Reprovado)
    { nome: "Daniela", nota1: 9, nota2: 8 } // Média: 8.5 (Aprovado)
];

function mostrarAluno(alunos) {

    for (let aluno of alunos) {

        if (aluno.nome == '' || aluno.nota1 < 0 || aluno.nota1 > 10 || aluno.nota2 < 0 || aluno.nota2 > 10) {
            continue;
        }

        let media = (aluno.nota1 + aluno.nota2) / 2;
        let situacao = '';

        if (media >= 7) {
            situacao = 'Aprovado.'
        } else if (media >= 5) {
            situacao = 'Recuperação.'
        } else {
            situacao = 'Reprovado.'
        }

        console.log(`Aluno: ${aluno.nome}`)
        console.log(`Primeira nota: ${aluno.nota1.toFixed(2)}`)
        console.log(`Segunda nota: ${aluno.nota2.toFixed(2)}`)
        console.log(`Sua média: ${media.toFixed(2)}`)
        console.log(`Situação: ${situacao}`)
        console.log(`-------------------------`)
    }
}

mostrarAluno(alunos);