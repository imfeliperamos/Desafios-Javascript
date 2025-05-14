let filme = {
    titulo: 'Vingadores',
    diretor: 'Irmãos Russos',
    anoLancamento: 2019,
    classificacao: 18,
    disponivel: false
}

function exibirFilme(filmesCinema) {

    console.log(`Titulo: ${filmesCinema.titulo}`)
    console.log(`Diretor: ${filmesCinema.diretor}`)
    console.log(`Ano Lancamento: ${filmesCinema.anoLancamento}`)
    console.log(`Classificação: ${filmesCinema.classificacao}`)

    let status = filmesCinema.disponivel ? 'Sim' : 'Não';
    console.log(`Disponível: ${status}`)

}

exibirFilme(filme);