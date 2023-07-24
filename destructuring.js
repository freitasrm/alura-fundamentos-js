const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

// array de arrays
// const numeros = [numerosPares, numerosImpares];

// destructuring arrays em dados (listando os dados fora do array)
const numeros = [...numerosPares, ...numerosImpares]

console.log(numeros)
 
// variaveis sem destructing
// const num1 = 1;
// const num2 = 2;

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

console.log(num1, num2, outrosNumeros);


// definindo valor padrão
const [nome1 = 'Ju'] = [];

console.log(nome1);

// objeto de cadastro
const pessoa = {
    nome: 'Ju',
    idade: 25
}

    // abre o objeto e permite sequencia do cadastro
const pessoaComTelefone = {
    ...pessoa, telefone: 12312123
}

    // objeto de objeto
const pessoaComTelefone2 = {
    pessoa, telefone: 12312123
}


console.log(pessoa, pessoaComTelefone, pessoaComTelefone2);

// pegando a variável nome do objeto pessoa (padrão)
// const nome = pessoa.nome;
// destructuring
const { nome } = pessoa;
console.log(nome);

const { idade } = pessoa;
console.log(idade);

// destructuring função

// function imprimeDados(dados) {
//     const { nome, idade } = dados;
//     console.log(nome, idade)
// }

function imprimeDados({ nome, idade }) {
    console.log(nome, idade)
}

imprimeDados(pessoa)