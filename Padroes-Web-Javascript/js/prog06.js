let frutas = ['laranja', 'maça', 'banana', 'limão'];

console.log(frutas);

frutas.sort(function (a, b) {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
});
console.log(frutas.join(' '));

let vetor = ['Gilmar', 51, true, [1, 2, 3]];
console.log(vetor);

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matriz[0][1]);
