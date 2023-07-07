// ******************** Task 1 ********************
// Напишіть клас Круг та реалізуйте функціонал:
//   Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
//   Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
//   Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
//   Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
//   Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
//   Визначте метод перевірки попадання крапки до кола;
//   Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  getCircleLength() {
    return 2 * 3.14 * this.r;
  }
  static getCircleLengthByRadius(r) {
    return 2 * 3.14 * r;
  }
  getCircleCopy() {
    return new Circle(this.x, this.y, this.r);
  }
  static createCircle(x, y, r) {
    return new Circle(x, y, r);
  }
  isDotOnCircle(x, y) {
    return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= this.r;
  }
  toString() {
    return `The circle with center in (${this.x}, ${this.y}) and radius ${this.r} was created successfully.`;
  }
}

const circle = new Circle(3, 1, 7);
console.log(circle.getCircleLength()); // 43.96
console.log(Circle.getCircleLengthByRadius(28)); // 175.84

const copy = circle.getCircleCopy();
console.log(copy.toString()); // The circle with center in (3, 1) and radius 7 was created successfully.
console.log(Circle.createCircle(0, 0, 3).toString()); // The circle with center in (0, 0) and radius 3 was created successfully.
console.log(circle.isDotOnCircle(-5, 3)); // false
console.log(circle.toString()); // The circle with center in (3, 1) and radius 7 was created successfully.
