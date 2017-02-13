// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base){
  this.side1 = side1;
  this.side2 = side2;
  this.base = base;
  this.area = function() {
    return (side1 * side2)/2; //assuming side1 and side2 are the sides forming the right angle
  };
  this.perimeter = function() {
    return Number(side1) + Number(side2) + Number(base);
  };
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var triangleUno = new RightTriangle(3,4,5);
var triangleDos = new RightTriangle(5,12,13);

console.log(triangleUno.area());
console.log(triangleUno.perimeter());

console.log(triangleDos.area());
console.log(triangleDos.perimeter());
