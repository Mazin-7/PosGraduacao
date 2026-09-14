/*

Introdução a objetos.
- São estruturas de nome e valor.
- São delimitados por chave.
- Os atibutos são separados por virgula e não por ponto e virgula.
- O valor e especificado por : e não por =

*/

let musica = {};
console.log(musica);

musica.nome = "I'm Eighteen";
musica.artista = 'Alice Cooper';
musica.segundos = 180;

console.log(musica);

let joao = {
    nome: 'João',
    idade: 35,
};

let maria = {};
for (let chave in joao) {
    maria[chave] = joao[chave];
}

maria.nome = 'Maria';
maria.sobrenome = 'Santos';

console.log(joao);
console.log(maria);

function Usuario(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.maiorIdade = function () {
        return this.idade >= 18;
    };
}

function criaUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        maiorIdade: function () {
            return this.idade >= 18;
        },
    };
}

class User {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    maiorIdade() {
        return this.idade >= 18;
    }
}

/* let joao1 = criaUsuario('João', 35)*/
//let joao1 = new  Usuario('joão', 35);

let joao1 = new User('João', 15);

console.log(joao1);
console.log(joao1.maiorIdade());
