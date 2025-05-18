let catalogoFilmes = [
    {
        titulo: "A Origem",
        diretor: "Christopher Nolan",
        ano: 2010,
        genero: "Ficção Científica"
    },
    {
        titulo: "Interestelar",
        diretor: "Christopher Nolan",
        ano: 2014,
        genero: "Ficção Científica"
    },
    {
        titulo: "O Grande Truque",
        diretor: "Christopher Nolan",
        ano: 2006,
        genero: "Drama"
    },
    {
        titulo: "Dunkirk",
        diretor: "Christopher Nolan",
        ano: 2017,
        genero: "Guerra"
    }
];


// Essa function serve para pegar o conteúdo do array e transportar para o console.
function exibirFilmes(catalogoFilmes) {
    for (let filme of catalogoFilmes) {
        console.log(`🎥 Título: ${filme.titulo} | Diretor: ${filme.diretor} | Ano: ${filme.ano} | Gênero: ${filme.genero}`)
    }

}
// Função para filtrar filmes por gênero
function filtrarPorGenero(catalogoFilmes, generoDesejado) {
    let filmesFiltrados = [];

    for (let filme of catalogoFilmes) {
        if (filme.genero.toLowerCase() === generoDesejado.toLowerCase())
            filmesFiltrados.push(filme);
    }
    return filmesFiltrados;
}

// Código para ver o total de filmes no array
function exibirTotaldeFilmes(filmes) {
    console.log(`Total de filmes: ${filmes.length}`)
    console.log('------------------------------------------------------------');

}

// Exibindo todos os filmes
console.log("Todos os filmes:");
exibirFilmes(catalogoFilmes);

let generoDesejado = 'Ficção Científica'
let filmesFiltrados = filtrarPorGenero(catalogoFilmes, generoDesejado)

if (filmesFiltrados.length === 0) {
    console.log(`Nenhum filme encontrado no gênero ${generoDesejado}.`)
} else {
    console.log(`\nFilmes do gênero ${generoDesejado}`)
    exibirFilmes(filmesFiltrados);

    // Exibir o total de filmes filtrados
    console.log(`\nResumo dos filmes filtrados:`)
    exibirTotaldeFilmes(filmesFiltrados)
}

// exibir o total de filmesF
console.log("\nResumo do catálogo:");
exibirTotaldeFilmes(catalogoFilmes);
