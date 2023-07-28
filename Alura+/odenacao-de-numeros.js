var lista = [10, 1, 5, 9, 8, 12, 15];

lista.sort(); // [1, 10, 12, 15, 5, 8, 9]

function comparaNumeros(a, b) {
  console.log('valores a e b',a, b);
    if (a == b) {
        console.log('a == b',0);
        return 0;
    }
    if (a > b) {
        console.log('a < b',-1);
        return -1;
    }
    if (a < b) {
        console.log('a > b',1);
        return 1;
    }
}
console.log(lista)
lista.sort(comparaNumeros); // [1, 5, 8, 9, 10, 12, 15]
console.log(lista)
console.log(lista.sort((a,b) => a - b));
console.log(lista.sort((a,b) => b - a));