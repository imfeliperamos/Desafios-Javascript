function saudacaoPersonalizada(nome, horario) {

    if (horario === 'manhã') {
        console.log(`Bom dia, ${nome}! Seja bem-vindo(a).`)
    } else if (horario === 'tarde') {
        console.log(`Boa tarde, ${nome}! Seja bem-vindo(a).`)
    } else if (horario === 'noite') {
        console.log(`Boa noite, ${nome}! Seja bem-vindo(a).`)
    } else {
        console.log('Nada encontrado(a)')
    }

}

saudacaoPersonalizada('Felipe', 'manhã');
saudacaoPersonalizada('Lucas', 'tarde');
saudacaoPersonalizada('Beatriz', 'noite');
saudacaoPersonalizada('Ana', 'noite');


