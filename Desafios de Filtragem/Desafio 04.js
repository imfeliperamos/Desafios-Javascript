let produtos = [
    { nome: 'Feijão', preco: 10.99, categoria: 'Alimento' },
    { nome: 'Arroz', preco: 8.50, categoria: 'Alimento' },
    { nome: 'Sabonete', preco: 2.99, categoria: 'Higiene' },
    { nome: 'Camisa', preco: 4.99, categoria: 'Roupas' },

];

function totalDeProdutos(produtos) {
    console.log(`\nTotal de produtos: ${produtos.length}`)
}

function exibirProdutos(produtos) {
    for (let produto of produtos) {
        console.log(`Nome: ${produto.nome} | Preço: ${produto.preco.toFixed(2)} | Categoria: ${produto.categoria}`)

    }

}

function filtrarPorCategoria(produtos, categoriaDesejada) {

    let produtosFiltrados = []

    for (let produto of produtos) {
        if (produto.categoria.toLowerCase() === categoriaDesejada.toLowerCase()) {
            produtosFiltrados.push(produto)
        }
    }

    return produtosFiltrados;
}

let categoriaDesejada = 'Alimento'
let resultado = filtrarPorCategoria(produtos, categoriaDesejada);

if (resultado.length === 0) {
    console.log(`Nenhum produto encontrado para a categoria "${categoriaDesejada}".`);
} else {
    console.log(`\nProdutos da categoria "${categoriaDesejada}":`);
    console.log(`Total encontrados: ${resultado.length}`);
    exibirProdutos(resultado);
}

totalDeProdutos(produtos);
exibirProdutos(produtos);