let biblioteca = [
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, categoria: "Romance" },
    { titulo: "1984", autor: "George Orwell", ano: 1949, categoria: "Ficção Científica" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "Infantil" }
];

function mostrarLivros(biblioteca) {

    for (let livros of biblioteca) {
        console.log(`📘 Título: ${livros.titulo} | Autor: ${livros.autor} | Ano: ${livros.ano} | Categoria: ${livros.categoria}`)
        console.log('--------------------------------------------')

        if (biblioteca.length === 0) {
            console.log("Nenhum livro encontrado.");
            return;
        }
    }
}
function quantidadeLivros(biblioteca) {
    console.log(`Quantidade de Livros: ${biblioteca.length}`)
}

function filtrarPorCategoria(biblioteca, categoriaDesejada) {

    let livrosFiltrados = []
    //Cria um array vazio para armazenar os livros que correspondem à categoria desejada.
    for (let livro of biblioteca) {
        if (livro.categoria.toLowerCase() === categoriaDesejada.toLowerCase()) {
            //Dentro do loop, verifica se a propriedade categoria do livro atual é igual à categoriaDesejada.
            livrosFiltrados.push(livro)
            // Se a condição for verdadeira, adiciona o livro ao array livrosFiltrados.
        }
    }

    return livrosFiltrados;
}

let categoriaDesejada = "Romance"; // Define a categoria desejada

if (categoriaDesejada === '') { // Fiz esse IF para que quando nenhuma categoria seja encontrada mande uma mensagem.
    console.log('Nenhuma categoria encontrada.')
    return;
}
let livrosFiltrados = filtrarPorCategoria(biblioteca, categoriaDesejada); // Chama a função para filtrar os livros

console.log(`Livros da categoria "${categoriaDesejada}":`);
mostrarLivros(livrosFiltrados); // Exibe os livros filtrados
quantidadeLivros(biblioteca)

// filtrarPorCategoria('Romance');
// mostrarLivros(biblioteca);
// quantidadeLivros(biblioteca);
