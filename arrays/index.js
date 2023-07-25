//const arrayVazia = [];
const arrayVazia = [,,,];

console.log(arrayVazia)
console.log(arrayVazia.length)
console.log(arrayVazia[0])

console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])

console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)


// TESTE FUNÇÕES CALLBACK
const arrayNums = [1, 2, 3, 4]


// // FUNÇÃO CRIADA PARA REPRESENTAR O QUE PODE SER FEITO NO MAP POR CALLBACK
// function multiplicaPorDez(num) {
//     return num * 10
// }
// ///
// const arraySomada = arrayNums.map(multiplicaPorDez)

// UTILIZANDO ARROW FUNCTION ANÔNIMA
const arraySomada = arrayNums.map(num => num * 10);

console.log(arraySomada)

// APRENDENDO COM REDUCE
const numeros = [43, 50, 65, 12]


// FUNÇÃO EXTERNA PARA VISUALIZAÇÃO DO CALLBACK NO REDUCE
// function operacaoNumerica(acc, atual) {
//     return atual + acc
//    }
   
// const soma = numeros.reduce(operacaoNumerica, 0)

// DECLARADA (LEGIBILIDADE MELHOR)
// const soma = numeros.reduce(function (acc, atual) {
//     return atual + acc
//    }, 0)

// CONSISA (PRÁTICA COMUM)
const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170