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
  constructor() {
    super(Wheels, engine, color);
  }
}

class PrivetCar extends Car {
  constructor() {
    super(Wheels, engine, color);
  }
}

class truck extends Car {
  constructor() {
    super(Wheels, engine, color);
  }
}
