const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// declarando set e usando spread
//const meuSet = new Set(nomes);
// const nomesAtualizados = [...meuSet]

//forma consisa
const nomesAtualizados = [... new Set(nomes)];


console.log(nomesAtualizados);