class Rectangle {

    // add x1, y1
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    print() {
        console.log(`[${this.x}, ${this.y}]`)
    }

    // area
    area = () => {
        return this.x * this.y
    }
    // Compare = ( object1, object2) => {
    //      object1.y <= object2.y && object2.x <= object1.x  ? "Rectangle might interfere.":"All good";
    // overlay
    // tenemos que comprobar la siguiente situación
    // .x----------x.....
    // .|..........|.....
    // .|......x---|----x
    // .x------|---x....|
    // ........x--------x6
    // Se superponen si alguna de sus coordenadas están dentro de los límites
    // del otro rectángulo

    overlay = (object2) => {
        var check = true;
        let myArray = new Array();
        let myArray2 = new Array();
        for (let index = this.x; index <= this.y; index++) {
            myArray.push(index)
            console.log(myArray)

        }
        for (let index = object2.x; index <= object2.y; index++) {
            myArray2.push(index)
            console.log(myArray2)

        }
        for (let i = 0; i <= myArray.length; i++) {
                if (myArray.includes(myArray2[i])) {
                    check = false;
                }


            
        }
        if (!check) {
            console.log("The rectangles might interfere.")
        }else{
            console.log("All good")
        }
    }
}




let r1 = new Rectangle( 2,9);
let r2 = new Rectangle(0, 1);
r1.print()
r2.print()
let area = r1.area();
console.log(`area ${area}`)

let isOverlay = r1.overlay(r2)
