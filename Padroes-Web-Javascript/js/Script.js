function Forma(x, y) {
    this.x = x;
    this.y = y;
}

function Retangulo(x, y, l, a) {
    Forma.call(this, x, y);
    this.largura = l;
    this.altura = a;
}

let r1 = new Retangulo(10, 15, 100, 50);

Forma.prototype.move = function (dx, dy) {
    this.x += dx;
    this.y += dy;
};

//r1.move(15, 15);

console.log(r1);
