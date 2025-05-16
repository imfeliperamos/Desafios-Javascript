function validarNomeUsuario(nome) {

    if (nome.trim() === '') {
        console.log('Nome inválido.')
        return;
    } else if (nome.length < 3) {
        console.log('Digite pelo menos três caracteres.')
        return;
    } else {
        console.log(`Nome original: ${nome}`)
    }

    console.log(`Maiúscula: ${nome.toUpperCase()}`)
    console.log(`Minúscula: ${nome.toLowerCase()}`)
    console.log(`Quantidade de caracteres (sem espaços): ${nome.replaceAll(' ', '').length}`);


    if (nome.includes(' ')) {
        console.log('O nome contém espaços em branco.')
    } else {
        console.log('O nome não contém espaços em branco')
    }

    console.log(`2 primeiros caracteres: ${nome.slice(0, 2)}`)
    console.log(`2 últimos caracteres: ${nome.slice(-2)}`)

    if (nome.toLowerCase() === 'lucas' || nome.toLowerCase() === 'felipe' || nome.toLowerCase() === 'beatriz' || nome.toLowerCase() === 'ana') {
        console.log(`Nome muito comum entre devs! 😉`)
    } else {
        console.log(`Nome único por aqui. 😎`)
    }
    console.log('------------------------------')
}

validarNomeUsuario('Sirlei');
validarNomeUsuario('Lucas');
validarNomeUsuario('Felipe');
validarNomeUsuario('Beatriz');
validarNomeUsuario('Ana');
validarNomeUsuario('');
validarNomeUsuario('al');

