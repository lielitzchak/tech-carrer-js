let show = document.getElementById("show");
class Car {
  Wheels;
  engine;
  color;
  constructor(Wheels, engine, color) {
    this.Wheels = Wheels;
    this.engine = engine;
    this.color = color;
  }
  printWindow() {
    document.body.innerHTML = `<div>the Wheels: ${this.Wheels} <br>
     the Wheels: ${this.engine} <br>
     the Wheels: ${this.color} <br>
     </div>`;
  }
  static returnBigEngine(obj1, obj2) {
    return obj1.engine > obj2.engine ? obj1.engine : obj2.engine;
  }
}
let oneCar = new Car(4, 1, "black");
let towCar = new Car(5, 4528, "pink");
// oneCar.printWindow();

class Bus extends Car {
  name;
  constructor(Wheels, engine, color, name) {
    super(Wheels, engine, color);
  }
  callFromBus() {
    super.printWindow();
  }
}

class PrivetCar extends Car {
  name;
  constructor(Wheels, engine, color, name) {
    super(Wheels, engine, color);
  }
  callFromPrivetCar() {
    super.printWindow();
  }
}

class Truck extends Car {
  name;
  constructor(Wheels, engine, color, name) {
    super(Wheels, engine, color);
    this.name = name;
  }
  callFromTruck() {
    super.printWindow();
    // console.log("hollo");
  }
  get result() {
    return this.someString().toUpperCase();
  }
  someString() {
    return "liel itzchak";
  }
}
let x = new Truck(5, 852, "pink", "liel truck");
// x.callFromTruck()
// console.log(x.result);
// console.log(Car.returnBigEngine(oneCar, towCar));
// console.log(oneCar);
// console.log(towCar);
// let chek = Car.returnBigEngine(oneCar, towCar);
// console.log(chek);
let btnClick = document.getElementById("btn");
let inputWheels = document.getElementById("inputWheels");
let inputEnging = document.getElementById("inputEnging");
let inputColor = document.getElementById("inputColor");
let inputName = document.getElementById("inputName");
let printToTableSection = document.getElementById("printToTableSection");
const ALL_CARS = [];
btnClick.onclick = (e) => {
  e.preventDefault();
  let newCar = new Truck(
    inputWheels.value,
    inputEnging.value,
    inputColor.value,
    inputName.value
  );
  ALL_CARS.push(newCar);
  // console.log(ALL_CARS);
  printToTable(newCar);
};
function printToTable(arr) {
  printToTableSection.innerHTML += `
  <tr>
    <td>${arr.name}</td>
    <td>${arr.Wheels}</td>
    <td>${arr.engine}</td>
    <td>${arr.color}</td>
  </tr>      
  `;
}
