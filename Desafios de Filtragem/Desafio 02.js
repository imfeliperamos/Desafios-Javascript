// Array de objetos representando os cursos disponíveis no catálogo.
let catalogoCursos = [
    { curso: "JavaScript Básico", instrutor: "Carlos Silva", duracao: 20, categoria: "Programação" },
    { curso: "HTML e CSS Avançado", instrutor: "Ana Souza", duracao: 40, categoria: "Web Design" },
    { curso: "Node.js Completo", instrutor: "Felipe Oliveira", duracao: 68, categoria: "Desenvolvimento Backend" }
];

// Função para exibir os cursos do catálogo no console.
function exibirCatalogo(cursos) {
    for (let curso of cursos) {
        console.log(`🎓 Curso: ${curso.curso} | Instrutor: ${curso.instrutor} | Duração: ${curso.duracao} | Categoria: ${curso.categoria}`);
        console.log('------------------------------------------------------------------------------------------');
    }
}

// Função para exibir a quantidade total de cursos no catálogo.
function exibirQuantidadeCursos(cursos) {
    console.log(`Quantidade de cursos: ${cursos.length}`);
}

// Função para filtrar cursos por uma categoria específica.
function filtrarCursosPorCategoria(cursos, categoriaDesejada) {
    let cursosFiltrados = [];

    for (let curso of cursos) {
        if (curso.categoria.toLowerCase() === categoriaDesejada.toLowerCase()) {
            cursosFiltrados.push(curso); // Adiciona o curso correspondente ao array de filtrados.
        }
    }

    return cursosFiltrados; // Retorna os cursos filtrados.
}

// Define a categoria desejada para filtrar os cursos.
let categoriaEscolhida = 'Web Design';

// Chama a função para filtrar os cursos pela categoria escolhida.
let cursosFiltrados = filtrarCursosPorCategoria(catalogoCursos, categoriaEscolhida);

// Verifica se nenhum curso foi encontrado na categoria escolhida.
if (cursosFiltrados.length === 0) {
    console.log(`Nenhum curso encontrado na categoria "${categoriaEscolhida}".`);
} else {
    console.log(`Cursos da categoria "${categoriaEscolhida}":`);
    exibirCatalogo(cursosFiltrados); // Exibe os cursos filtrados.
}