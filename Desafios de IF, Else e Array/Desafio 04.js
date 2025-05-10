let nome = 'Felipe' // Eu poderia usar prompt('Digite seu curso.')
let idade = 15.4646 // Eu poderia usar prompt('Digite seu curso.')
let curso =  'JavaScript' // Eu poderia usar prompt('Digite seu curso.')
let nota1 = 8.6 // Eu poderia usar prompt('Digite seu curso.')
let nota2 = 5.2 // Eu poderia usar prompt('Digite seu curso.')

let media = ((nota1 + nota2) / 2).toFixed(2);
let situacao = '';
let maiorOuMenorDeIdade = '';

if (idade > 18) {
    maiorOuMenorDeIdade = '(Maior de idade.)'
} else {
    maiorOuMenorDeIdade = '(Menor de Idade.)'
}
if (media >= 7) {
    situacao = 'Aprovado';
} else if (media >= 5) {
    situacao = 'Recuperação';
} else {
    situacao = 'Reprovado';
}

console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade.toFixed(0)} | ${maiorOuMenorDeIdade}`)
console.log(`Curso: ${curso}`)
console.log(`Média: ${media}`)
console.log(`Situação: ${situacao}`)