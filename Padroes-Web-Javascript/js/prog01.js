let idade = 30;
console.log(idade);

let nome = 'Gilmar';
console.log(1, nome);

{
    let nome2 = 'Gilmar2';
    console.log(2, nome2);
}
// console.log(nome2); utilizando a variavel fora do bloco, não é possível acessar a variável nome2, pois ela foi declarada com let dentro do bloco.

{
    var nome3 = 'Gilmar3';
    console.log(3, nome3);
}
console.log(4, nome3);

{
    const PI = 3.14;
    console.log(5, PI);
}
