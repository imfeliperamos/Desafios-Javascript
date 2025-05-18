let livros = [
    // Array de objetos representando livros, cada um com título, autor e gênero
    { titulo: 'Clean Code', autor: 'Robert C. Martin', genero: 'Programação' },
    { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', genero: 'Fantasia' },
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia' },
];

// Função para exibir o total de livros no array
function totalDeLivros(livros) {
    console.log(`\nTotal de livros: ${livros.length}`) // Exibe a quantidade total de livros
}

// Função para exibir os detalhes de cada livro no console
function exibirLivros(livros) {
    for (let livro of livros) { // Itera sobre cada livro no array
        console.log(`Titulo: ${livro.titulo} | Autor: ${livro.autor} | genero: ${livro.genero}`) 
        // Exibe o título, autor e gênero do livro
    }
}

// Função para filtrar livros com base no gênero desejado
function livrosFiltrados(livros, generoDesejado) {
    let livrosFiltradosA = [] // Array para armazenar os livros que correspondem ao filtro

    for (let livro of livros) { // Itera sobre cada livro no array
        if(livro.genero.toLowerCase() === generoDesejado.toLowerCase()) {
            // Verifica se o gênero do livro (em letras minúsculas) é igual ao gênero desejado
            livrosFiltradosA.push(livro) // Adiciona o livro ao array de filtrados
        } 
    }
    return livrosFiltradosA; // Retorna o array com os livros filtrados
}

let generoDesejado = 'aa' // Define o gênero desejado para o filtro
let resultado = livrosFiltrados(livros, generoDesejado) // Filtra os livros com base no gênero

// Verifica se o array de resultados está vazio
if(resultado.length === 0) {
    console.log("Por favor, digite um gênero válido.") 
    // Exibe mensagem caso nenhum livro corresponda ao gênero
} else {
    console.log(`\nTotal encontrados: ${resultado.length}`) 
    // Exibe o total de livros encontrados para o gênero
    console.log(`Genero encontrado para: "${generoDesejado}"`) 
    // Exibe o gênero encontrado
    exibirLivros(resultado) // Exibe os detalhes dos livros filtrados
}

totalDeLivros(livros); // Exibe o total de livros no array original
exibirLivros(livros); // Exibe os detalhes de todos os livros no array original