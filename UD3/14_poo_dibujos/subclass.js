class Figure {
    constructor(Point){

    }
    print() {
        console.log('I\'m a figure');
    }
}

class Square extends Figure {
    constructor(x,y,x1,y1){
        super(x,y)
    }
    print() {
        console.log('I\'m a square');
    }
}

class Circle extends Figure {
}

class Triangle extends Figure {
    print() {
        super.print();
        console.log('and a triangle')
    }
}
class Point{
    constructor(x,y){
        this.x=x
        this.y=y
    }
}

let draws = [new Figure(3,4), new Square(7,8,9,9), new Circle(4,5,7), new Triangle(2,3,2,4)]
draws.forEach(f => f.print())