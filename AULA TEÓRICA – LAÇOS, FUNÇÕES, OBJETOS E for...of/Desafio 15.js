function analisarBiografia(bio) {
    let palavras = bio.trim().split(/\s+/); // Lida com múltiplos espaços

    console.log(`Total de caracteres com espaço: ${bio.length}`);
    console.log(`Total de caracteres sem espaço: ${bio.replaceAll(' ', '').length}`);
    console.log(`Total de palavras: ${palavras.length}`);

    if (bio.toLowerCase().includes('desenvolvedor')) {
        console.log(`A palavra "desenvolvedor" está ativa!`);
    } else {
        console.log('A palavra "desenvolvedor" não existe.');
    }

    console.log(`3 primeiros caracteres: ${bio.slice(0, 3)}`);
    console.log(`3 últimos caracteres: ${bio.slice(-3)}`);
    console.log(`Prévia da Bio: ${bio.slice(0, 30)}...`);

    console.log('--------------------------------------------');
}
