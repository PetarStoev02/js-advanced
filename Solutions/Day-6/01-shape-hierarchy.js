/*
  Day 6 - Solution: Shape Hierarchy
*/

class Shape {
  constructor(color) {
    this.color = color;
  }
  
  getArea() {
    throw new Error('getArea() must be implemented by subclass');
  }
  
  getPerimeter() {
    throw new Error('getPerimeter() must be implemented by subclass');
  }
  
  describe() {
    return `A ${this.color} ${this.constructor.name.toLowerCase()} with area ${this.getArea().toFixed(2)}`;
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
  
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(a, b, c, color) {
    super(color);
    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  getArea() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
  
  getPerimeter() {
    return this.a + this.b + this.c;
  }
}

class Square extends Rectangle {
  constructor(side, color) {
    super(side, side, color);
  }
}

// Test
const circle = new Circle(5, 'red');
console.log(circle.describe());

const square = new Square(5, 'blue');
console.log(square.getArea()); // 25
console.log(square instanceof Rectangle); // true
