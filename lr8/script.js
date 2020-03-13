class Point{
    constructor(x1, y1){
        this.x1=x1;
        this.y1=y1;
    }
    get coorX(){
        return this.x1;
    }
    get coorY(){
        return this.y1;
    }
    get coorXY(){
        return `(${this.x1}, ${this.y1})`;
    }

}

class Line extends Point{
    constructor(x1, y1, x2,y2){
        super(x1, y1);
        this.x2=x2;
        this.y2=y2;
    }
    get coorX2(){
        return this.x2;
    }
    get coorY2(){
        return this.y2;
    }
    get coorX2Y2(){
        return `(${this.x2}, ${this.y2})`;
    }

}
class Circle extends Point{
    constructor(x1, y1,r){
        super(x1, y1);
        this.r=r;
    }
    get center() {
        return `(${this.x1}, ${this.y1})`;
    };
    get radius() {
        return this.r;
    }
    get diameter() {
        return 2 * this.r;
    }
    get lengthC() {
        return 2 * Math.PI * this.r;
    }
    get area() {
        return Math.PI * this.r * this.r;
    }
}
class Ellipse extends Circle {
    constructor(x1, y1, a, b) {
        super(x1, y1);
        this.a = a; 
        this.b = b; 
    }
    get radiusA() {
        return this.a;
    }
    get areaEl() {
        return Math.PI * this.a * this.b;
    }
    get focus() {
        return Math.sqrt(Math.pow(this.b, 2) - Math.pow(this.a, 2));
    }
}
class Rect extends Line{
    constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
        super(x1, y1, x2, y2);
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;
    }
    get coorX3() {
        return this.x3;
    }
    get coorY3() {
        return this.y3;
    }
    get coorX4() {
        return this.x4
    }
    get coorY4() {
        return this.y4
    }
    get coorXY3() {
        return `(${this.x3}, ${this.y3})`;
    }
    get coorXY4() {
        return `(${this.x4}, ${this.y4})`;
    }
    get width() {
        return Math.sqrt(Math.pow(this.x4 - this.x1, 2) + Math.pow((this.y4 - this.y1), 2));
    }
    get length() {
        return Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow((this.y2 - this.y1), 2));
    }
    get square() {
        return this.length * this.width;
    }
}

let point = new Point(1, 1);
let line = new Line(1, 1, 2, 3);
let circle = new Circle(5, 6, 4);
let ellipse  = new Ellipse(1, 3, 4, 6);
let rect = new Rect(1, 2, 1, 5, 6, 5, 6, 2);


console.log('point');
console.log(point);

console.log('Line');
console.log(line);


console.log('Circle');
console.log(circle);


console.log('Ellipse');
console.log(ellipse);


console.log('rectangle');
console.log(rect);
