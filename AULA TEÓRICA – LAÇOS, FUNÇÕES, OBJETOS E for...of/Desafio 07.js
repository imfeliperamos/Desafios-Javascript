let filmesFavoritos = [
    {nome: 'Vingadores'},
    {nome: 'Cinderela'},
    {nome: 'Avatar'},
    {nome: 'The chosen'},
    {nome: 'Thor'}
]
let outrosFilmes = [
    {nome: 'Sonic'}
]

function listarFilmes(arrayDeFilmes){
    for(let i = 0; i < arrayDeFilmes.length; i++)
        console.log(`Filme ${i+1}: ${arrayDeFilmes[i].nome}`)
}

listarFilmes(filmesFavoritos);
listarFilmes(outrosFilmes);
