// Controde de fluxo de execução

// if, else if, else declaração condicional
let acessoPermitido;
let idade = 21;
if (idade >= 18) {
    acessoPermitido = true;
} else {
    acessoPermitido = false;
}
//acessoPermitido = idade >= 18 ? true : false;
console.log(1, acessoPermitido);


// Estruturas condicionais encadeadas
//1 Teste de operador
let a = 5,
    b = 3,
    operador = '+';

if (operador === '+') {
    console.log(a + b);
} else if (operador === '-') {
    console.log(a - b);
} else if (operador === '*') {
    console.log(a * b);
} else if (operador === '/') {
    console.log(a / b);
} else {
    console.log('operador é invalido');
}

// Declaração switch case
let c = 7,
    d = 9,
    operador1 = '+';

switch (operador1) {
    case '+':
        console.log(c + d);
        break;
    case '-':
        console.log(c - d);
        break;
    case '*':
        console.log(c * d);
        break;
    case '/':
        console.log(c / d);
        break;
    default:
        console.log('operador é invalido');
}

//Declaração de repetição
// while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
console.log('fim do while');

// do while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
console.log('fim do do while');

// for
for (let k = 0; k < 5; k++) {
    console.log(k);
}
console.log('fim do for');

//continue e break
for (let l = 0; l < 10; l++) {
    if (l === 5) {
        continue; // pula a iteração quando l é igual a 5
    }
    if (l === 8) {
        break; // sai do loop quando l é igual a 8
    }
    console.log(l);
}
console.log('fim do for com continue e break');