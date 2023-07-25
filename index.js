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