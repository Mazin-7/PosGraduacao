// Funções

// 1- Parâmetros
function mensagem(nome) {
    console.log(`Òlá ${nome}!`); // Usando interpolação para acostumar com o modelo em HTMl,
}
// Parâmetro utilizados (nome = Gilmar)
mensagem('Gilmar');
//OBs: Não existe um parâremetro defiitivo, o parâmetro vai ser o que eu quiser indicar.

// Exemplo 2

function mensagem(nome) {
    console.log(`Olá ${nome}!`);
}
function soma(a, b) {
    console.log(a, b);
}

soma(4, 3);


// 2- Valores de retorno!
function mensagem(nome) {
    return `Olá ${nome}!`;
}
function soma(a, b) {
    return a + b;
}

//Valor do retorno e descidido fora fa função
let total = soma(14, 3);
console.log(total)



// 3- Valor padrão de parâmetro
function mensagem(nome) {
    return `Olá ${nome}!`;
} //O valor padrão do parâmetro assume o valor do parâmetro caso eu não identifique Ex: a = 0, b = 0
function soma(a , b) {
    return a + b;
}

console.log(soma(14, 5))


// 4- Vetor de Parâmetros, toda função tem um objeto interno arguments
function soma() {
    return arguments[0] + arguments[1]
    
}

console.log(soma(14, 5))
