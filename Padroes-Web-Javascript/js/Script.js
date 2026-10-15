function criaCotador() {
    let n = 0;
    function altera(v) {
        n += v;
    }
    return {
        incrementa: function () {
            altera(1);
        },
        decrementa: function () {
            altera(-1);
        },
        valor: function () {
            return n;
        },
    };
}

let contador1 = criaCotador();
let contador2 = criaCotador();

contador1.incrementa();
console.log(contador1.valor());
contador1.incrementa();
console.log(contador1.valor());
contador1.incrementa();
console.log(contador1.valor());
contador1.decrementa();
console.log(contador2.valor());
contador1.decrementa();
console.log(contador2.valor());
