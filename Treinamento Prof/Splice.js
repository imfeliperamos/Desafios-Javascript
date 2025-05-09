let estudos = ['HTML', 'CSS', 'JavaScript', 'Git', 'React'];

estudos.splice(2, 1)
estudos.splice(1,0, 'Lógica de Programação')
estudos.splice(estudos.length - 1, 1,  'Node.js')
estudos.splice(estudos.length, 0, 'Banco de Dados')
console.log(`Lista final: ${estudos}`)
console.log(`O total de itens: ${estudos.length}`)
console.log(`Primeiro item: ${estudos[0]}`)
console.log(`Último item: ${estudos[estudos.length -1]}`)
