function criaContador() {
    let n = 0;
    return function () {
        console.log(n++);
    };
}

let contador = criaContador();
contador();
contador();
contador();
contador();
