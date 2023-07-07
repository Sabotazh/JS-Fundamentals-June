// ******************** Task 3 ********************
// Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи.
//   Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
//   В класі Student необхідно перевизначити метод showFullName(middleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (middleName) студента.
//   Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
//   Приклад результату:
//   const stud1 = new Student("Petro", "Petrenko", 2019);
//   console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
//   console.log("Current course: " + stud1.showCourse()); //Current course: 4

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}

console.log(new Person('Ivan', 'Sabat').showFullName());

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return `${super.showFullName()} ${middleName}`;
  }

  showCourse() {
    const course = {
      1: 'first',
      2: 'second',
      3: 'third',
      4: 'fourth',
      5: 'fifth',
      6: 'sixth',
    };
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    let year = currentYear - this.year;

    if (0 === year && currentMonth >= 9) ++year;

    return course[year] ?? 'You are not a student';
  }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petro Petrenko Petrovych
console.log("Current course: " + stud1.showCourse()); // Current course: fourth
