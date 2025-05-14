let fruta = [
    { nome: "Maçã" },
    { nome: "Banana" },
    { nome: "Laranja" },
    { nome: "Uva" },
    { nome: "Pera" }
]

function frutasFavoritas(fruta) {

    for(let i = 0; i < fruta.length; i++) {
        console.log(`Fruta ${i+1}: ${fruta[i].nome}`)
    }
}

frutasFavoritas(fruta);