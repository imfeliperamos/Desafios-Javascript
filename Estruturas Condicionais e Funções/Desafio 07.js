let alunos = [
    { nome: "João", nota1: 86, nota2: 7 },
    { nome: "Maria", nota1: 9, nota2: 6 },
    { nome: "Pedro", nota1: 7, nota2: 8 },
    { nome: "Ana", nota1: 10, nota2: 9 },
    { nome: "", nota1: 6, nota2: 5 }
];

function avaliarTurma(alunos) {

    for (let i = 0; i < alunos.length; i++) {
        let nota1 = alunos[i].nota1;
        let nota2 = alunos[i].nota2;
        let nome = alunos[i].nome;

        let situacao = 'N/A';
        let desempenho = 'N/A';
        let media = (nota1 + nota2) / 2;

        if (nome == '') {
            console.log('Por favor insirá um nome para verificar o status do Aluno.')
            nome = 'N/A'
            situacao = 'N/A'
            desempenho = 'N/A'

        } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            console.log(`Nota inválida para ${nome}`)
            situacao = 'N/A'
            desempenho = 'N/A'

        } else if (media >= 9) {
            situacao = 'Aprovado';
            desempenho = 'Excelente';
        } else if (media >= 7) {
            situacao = 'Aprovado'
            desempenho = 'Bom'
        } else if (media >= 5) {
            situacao = 'Recuperação'
            desempenho = 'Regular'
        } else {
            situacao = 'Reprovado'
            desempenho = 'Insuficiente'
        }

        console.log(`Aluno: ${nome}`)
        console.log(`Notas: ${nota1.toFixed(2)}, ${nota2.toFixed(2)}`)
        console.log(`Média: ${media.toFixed(2)}`)
        console.log(`Situação: ${situacao}`)
        console.log(`Desempenho: ${desempenho}`)
        console.log('--------------------')
    }
}
avaliarTurma(alunos);