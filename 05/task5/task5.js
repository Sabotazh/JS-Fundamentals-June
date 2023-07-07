class Worker {
  static workers = [];

  static addToWorkers(instance) {
    this.workers.push(instance)
  }

  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    Worker.addToWorkers(this)
  }

  showSalary() {
    return this.dayRate * this.workingDays;
  }

  set setExp(value) {
    this.#experience = value;
  }

  get showExp() {
    return this.#experience;
  }

  showSalaryWithExperience() {
    return this.showSalary() * this.#experience;
  }

  static sort() {
    let arr = this.workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
    arr.forEach(el => {
      console.log(`${el.fullName}: ${el.showSalaryWithExperience()}`);
    });
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName + " salary: " + worker1.showSalary());
console.log("New experience: " + worker1.showExp);

console.log(
  worker1.fullName + " salary: " + worker1.showSalaryWithExperience()
);
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(
  worker2.fullName + " salary: " + worker2.showSalaryWithExperience()
);

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(
  worker3.fullName + " salary: " + worker3.showSalaryWithExperience()
);
let worker4 = new Worker("Max Segin", 24, 23);
worker4.setExp = 1.5;
console.log("New experience: " + worker4.showExp);
console.log(
  worker4.fullName + " salary: " + worker4.showSalaryWithExperience()
);
let worker5 = new Worker("Igor Segin", 54, 23);
worker5.setExp = 1.5;
console.log("New experience: " + worker5.showExp);
console.log(
  worker5.fullName + " salary: " + worker5.showSalaryWithExperience()
);
console.log("sorted salary")

let worker6 = new Worker("Test1 Segin", 4, 23);
worker6.setExp = 1.5;
let worker7 = new Worker("Test2 Segin", 84, 23);
worker7.setExp = 1.5;

console.log("sorted salary")

Worker.sort();
