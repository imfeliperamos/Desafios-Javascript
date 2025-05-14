let nomes = ["Ana", "João", "Felipe"];

// Usando for tradicional:
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Usando for...of:
for (let nome of nomes) {
    console.log(nome);
}