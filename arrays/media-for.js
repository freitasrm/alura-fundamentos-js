const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

console.log(somaDasNotas);

const mediaDasNotas = somaDasNotas / notas.length;

console.log(
    `A média das notas é ${mediaDasNotas}.`
);


const notas2 = [10, 6.5, 8, 7.5];

let somaDasNotas2 = 0;

for (let i = 0; i < notas2.length; i++) {
  somaDasNotas2 += notas2[i];
}

const media2 = somaDasNotas2 / notas2.length;

console.log(`A média das notas é ${media2}.`);