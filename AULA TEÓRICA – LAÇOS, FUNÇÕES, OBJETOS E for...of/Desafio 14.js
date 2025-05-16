function analisarComentario(comentario) {

    if (comentario.trim() === '') {
        console.log('Comentário inválido. Por favor, escreva algo.')
        return;
    }

    let palavras = comentario.trim().split(' ');

    console.log(`Comentário original: ${comentario}`); // Correção aqui
    console.log(`Comentário em minúsculas: ${comentario.toLowerCase()}`);
    console.log(`Comentário em maiúsculas: ${comentario.toUpperCase()}`);
    console.log(`Total de palavras: ${palavras.length}`);

    if (comentario.includes('JavaScript')) {
        console.log('Você mencionou JavaScript! Que legal!');
    } else {
        console.log('Comentário não menciona JavaScript.');
    }

    console.log(`Prévia: ${comentario.slice(0, 19)}`); // Correção aqui
    console.log('----------------------------------------------');

}

analisarComentario('Estou aprendendo JavaScript e estou adorando!');
analisarComentario('            ');