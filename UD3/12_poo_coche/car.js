class Car {
    constructor(marca, modelo, consumoPor100) {
        this.marca = marca;
        this.modelo = modelo;
        this.consumoPor100 = consumoPor100;
        this.gasolina = 0;
    }
    repostar(Litros) {
        this.gasolina += Litros;

    }
    mover(distancia) {
        this.gasolina -= distancia * (this.consumoPor100/100)
    }
    restante() {
        console.log(this.gasolina * (100 / this.consumoPor100) + "km restantes")
    }
}
let r1 = new Car("Opel", "Zafira")
r1.repostar(10)
r1.mover(10)
r1.restante();