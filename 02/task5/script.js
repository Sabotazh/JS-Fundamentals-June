let greeting, salute;
let hour = new Date().getHours();

if (0 <= hour && hour < 5)
  greeting = 'Доброї ночі';
else if (5 <= hour && hour < 11)
  greeting = 'Доброго ранку';
else if (11 <= hour && hour < 17)
  greeting = 'Доброго дня';
else if (17 <= hour && hour <= 23)
  greeting = 'Доброго вечора';

switch (hour) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    salute = 'Доброї ночі';
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    salute = 'Доброго ранку';
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
    salute = 'Доброго дня';
    break;
  case 17:
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    salute = 'Доброго вечора';
    break;
  default:
    alert('There is no greeting for ' + hour);
}

document.write(greeting);
console.log(salute)
