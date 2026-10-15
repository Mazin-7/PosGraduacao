function Pessoa(n) {
    this.nome = n;
    this.fn = function () {
        console.log(this);
    };
}

let p = new Pessoa('Marcos');
p.fn();
