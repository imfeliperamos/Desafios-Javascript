// Declaração de um array chamado "biblioteca" contendo objetos que representam livros.
let biblioteca = [
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, categoria: "Romance" },
    { titulo: "1984", autor: "George Orwell", ano: 1949, categoria: "Ficção Científica" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "Infantil" }
];

// Função para exibir os livros da biblioteca no console.
function mostrarLivros(biblioteca) {
    // Loop para iterar sobre cada livro no array "biblioteca".
    for (let livros of biblioteca) {
        // Exibe as informações do livro no console.
        console.log(`📘 Título: ${livros.titulo} | Autor: ${livros.autor} | Ano: ${livros.ano} | Categoria: ${livros.categoria}`);
        console.log('--------------------------------------------');

        // Verifica se a biblioteca está vazia.
        if (biblioteca.length === 0) {
            // Exibe uma mensagem caso não haja livros na biblioteca.
            console.log("Nenhum livro encontrado.");
            return; // Encerra a função.
        }
    }
}

// Função para exibir a quantidade de livros na biblioteca.
function quantidadeLivros(biblioteca) {
    // Exibe o número total de livros no console.
    console.log(`Quantidade de Livros: ${biblioteca.length}`);
}

// Função para filtrar livros por uma categoria específica.
function filtrarPorCategoria(biblioteca, categoriaDesejada) {
    // Cria um array vazio para armazenar os livros que correspondem à categoria desejada.
    let livrosFiltrados = [];
    
    // Loop para iterar sobre cada livro na biblioteca.
    for (let livro of biblioteca) {
        // Verifica se a categoria do livro corresponde à categoria desejada (ignorando maiúsculas/minúsculas).
        if (livro.categoria.toLowerCase() === categoriaDesejada.toLowerCase()) {
            // Adiciona o livro ao array "livrosFiltrados" se a condição for verdadeira.
            livrosFiltrados.push(livro);
        }
    }

    // Retorna o array de livros filtrados.
    return livrosFiltrados;
}

// Define a categoria desejada para filtrar os livros.
let categoriaDesejada = "Romance";

// Chama a função para filtrar os livros pela categoria desejada.
let livrosFiltrados = filtrarPorCategoria(biblioteca, categoriaDesejada);

// Verifica se nenhum livro foi encontrado na categoria desejada.
if (livrosFiltrados.length === 0) {
    // Exibe uma mensagem informando que não há livros na categoria.
    console.log(`Nenhum livro encontrado na categoria "${categoriaDesejada}".`);
} else {
    // Exibe os livros encontrados na categoria desejada.
    console.log(`Livros da categoria "${categoriaDesejada}":`);
    mostrarLivros(livrosFiltrados); // Chama a função para exibir os livros filtrados.
}