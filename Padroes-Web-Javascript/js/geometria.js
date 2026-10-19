const PI = 3.14159;

export class Circulo {
    constructor(r) {
        this.raio = r;
    }

    perimetro() {
        return 2 * PI * this.raio;
    }

    area() {
        //return PI*this*this.raio;
        return Math.PI * Math.pow(this.raio, 2);
    }
}
