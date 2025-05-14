let turma = [
    { nome: "Ana", nota1: 8, nota2: 9 }, // Aprovado (Média 8.5)
    { nome: "Carlos", nota1: 6, nota2: 6.5 }, // Recuperação (Média 6.25)
    { nome: "Beatriz", nota1: 4, nota2: 3 }, // Reprovado (Média 3.5)
    { nome: "Daniel", nota1: 7, nota2: 7.5 }, // Aprovado (Média 7.25)
    { nome: "Elisa", nota1: 5, nota2: 4 }  // Reprovado (Média 4.5)
]

function validarAluno(turma) {

    for(let turmas of turma) {
        
        if (turma.nome == '' || turmas.nota1 < 0 || turmas.nota1 > 10 || turmas.nota2 < 0 || turmas.nota2 > 10)
            continue;
    }
}

function calcularMedia(n1, n2) {

}

function avaliarSituacao(media) {

}

function avaliarTurma(turma) {

}