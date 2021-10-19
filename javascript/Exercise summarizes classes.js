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
}
let oneCar = new Car(4, 450, "black");
oneCar.printWindow();

class Bus extends Car {
   name;
  constructor(Wheels, engine, color,name) {
    super(Wheels, engine, color);
  }
  callFromBus() {
    super.printWindow();
  }
}

class PrivetCar extends Car {
   name;
  constructor(Wheels, engine, color,name) {
    super(Wheels, engine, color);
  }
  callFromPrivetCar() {
    super.printWindow()
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
}
let x = new Truck(5, 852, "pink", "liel truck");
// console.log(x);
