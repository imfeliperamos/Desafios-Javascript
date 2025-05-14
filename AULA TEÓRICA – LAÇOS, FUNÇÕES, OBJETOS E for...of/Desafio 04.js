let livro = {
    titulo: 'Cindereça',
    autor: 'Bartolomeu',
    anoPublicacao: 1995,
    disponivel: true
}

function livrosLista(livroObjeto) {

    console.log(`Titulo: ${livroObjeto.titulo}`)
    console.log(`Autor: ${livroObjeto.autor}`)
    console.log(`Ano de publicação: ${livroObjeto.anoPublicacao}`)

    let status = livroObjeto.disponivel ? "Sim" : "Não"
    console.log(`Disponível: ${status}`)
}

livrosLista(livro);