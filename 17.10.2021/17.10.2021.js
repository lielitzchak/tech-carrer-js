class Car {
  comp;
  year;
  star = 0;
  static counter = 0;
  constructor(company, year, star) {
    this.comp = company;
    this.year = year;
    this.star = star;
    Car.counter++;
  }
  static returnNew(obj1, obj2) {
    if (obj1.year > obj2.year) {
      return obj1;
    }
    return obj2;
  }
  static returnCampany(ob1, ob2) {
    if (ob1.star > ob2.star) {
      return ob1.comp;
    }
  }
}
let carOne = new Car("volvo", 2020, 55);
let carTow = new Car("tesla", 1955, 52);
// console.log(Car.returnNew(carOne, carTow));
// console.log(Car.counter);
console.log(Car.returnCampany(carOne, carTow));
