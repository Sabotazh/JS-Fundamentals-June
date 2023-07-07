// ******************** Task 4 ********************
// А.  Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
//     поле, яке зберігає колір маркера;
//     поле, яке зберігає кількість чорнила в маркері (у відсотках);
//     метод друку (метод приймає рядок і виводить текст відповідним кольором;
//     текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В.  Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, at nostrum harum pariatur quam doloremque beatae illo culpa nihil ducimus commodi magnam. Quos minus aperiam sapiente non consequuntur veritatis suscipit.`;

class Marker {
  constructor(color, inkQuantity) {
    this.color = color;
    this.inkQuantity = inkQuantity;
  }

  print(text) {
    text.split("").forEach(char => {
      document.write(
        `<span style="color: ${this.color};
            opacity: ${this.inkQuantity};">${char} </span>`
      );
      this.inkQuantity -= 0.05;
    });
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkQuantity) {
    super(color, inkQuantity);
  }

  print(text) {
    text.split("").forEach(char => {
      while (this.inkQuantity < 1) {
        this.refill();
      }
      document.write(
        `<span style="color: ${this.color};
              opacity: ${this.inkQuantity};">${char} </span>`
      );
      this.inkQuantity -= 0.05;
    });
  }

  refill() {
    this.inkQuantity += 0.05;
  }
}

let marker = new Marker("#FFA500", 1);
marker.print(text);
let marker2 = new Marker("#000000", 0.5);
marker2.print(text);
let refillableMarker = new RefillableMarker("#FF8C00", 1);
refillableMarker.print(text);
let refillableMarker2 = new RefillableMarker("#ff0000", 0.4);
refillableMarker2.print(text);
