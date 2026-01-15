/*
  Day 6 - Classes & Inheritance
  Exercise: Shape Hierarchy
  
  Create an abstract-like Shape class hierarchy with proper inheritance.
  
  Requirements:
  1. Shape (base class):
     - Constructor takes color
     - Abstract method: getArea() - throws error if not overridden
     - Abstract method: getPerimeter() - throws error if not overridden
     - Method: describe() - returns string with shape info
     
  2. Circle extends Shape:
     - Constructor takes radius and color
     - Implements getArea() and getPerimeter()
     
  3. Rectangle extends Shape:
     - Constructor takes width, height, and color
     - Implements getArea() and getPerimeter()
     
  4. Triangle extends Shape:
     - Constructor takes three sides (a, b, c) and color
     - Implements getArea() (use Heron's formula) and getPerimeter()
     
  5. Square extends Rectangle:
     - Constructor takes side and color
     - Inherits from Rectangle
  
  Example:
    const circle = new Circle(5, 'red');
    console.log(circle.getArea());      // ~78.54
    console.log(circle.describe());     // "A red circle with area 78.54"
*/

class Shape {
  // Your implementation here
}

class Circle extends Shape {
  // Your implementation here
}

class Rectangle extends Shape {
  // Your implementation here
}

class Triangle extends Shape {
  // Your implementation here
}

class Square extends Rectangle {
  // Your implementation here
}

// Test cases
console.log('--- Circle ---');
const circle = new Circle(5, 'red');
console.log('Area:', circle.getArea().toFixed(2));           // ~78.54
console.log('Perimeter:', circle.getPerimeter().toFixed(2)); // ~31.42
console.log(circle.describe());

console.log('\n--- Rectangle ---');
const rect = new Rectangle(4, 6, 'blue');
console.log('Area:', rect.getArea());           // 24
console.log('Perimeter:', rect.getPerimeter()); // 20
console.log(rect.describe());

console.log('\n--- Triangle (3-4-5 right triangle) ---');
const triangle = new Triangle(3, 4, 5, 'green');
console.log('Area:', triangle.getArea());           // 6
console.log('Perimeter:', triangle.getPerimeter()); // 12
console.log(triangle.describe());

console.log('\n--- Square ---');
const square = new Square(5, 'yellow');
console.log('Area:', square.getArea());           // 25
console.log('Perimeter:', square.getPerimeter()); // 20
console.log(square.describe());
console.log('Is Square a Rectangle?', square instanceof Rectangle); // true
console.log('Is Square a Shape?', square instanceof Shape);         // true

// Test abstract method enforcement
console.log('\n--- Abstract Method Test ---');
try {
  const shape = new Shape('purple');
  shape.getArea(); // Should throw error
} catch (e) {
  console.log('Caught expected error:', e.message);
}
