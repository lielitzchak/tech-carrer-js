 //!  1
//   fname;
//   lname;
//   num;
//   constructor(fname, lname, num) {
//     this.fname = fname;
//     this.lname = lname;
//     this.num = num;
//   }
//   static myFunction(num1) {
//     return Math.floor(Math.random() * num1);
//   }
// }

// class Cc extends City {
//   constructor(fname, lname, age) {
//     super(fname, lname);
//     this.age = age;
//   }
//   static myFunction1() {
//     super.myFunction;
//   }
// }
// const some = new City("liel", "itzchak", 21);
// console.table(some);
// console.log(City.myFunction(some.num1));
// document.body.innerHTML = `${some.fname}, ${some.numLiv}`;
// class Country extends City {
//   kids;
//   constructor(fname, lname, kids) {
//     super(fname, lname);
//     this.kids = kids;
//   }
// static returnCampany(ob1, ob2) {
//     if (ob1.star > ob2.star) {
//       return ob1.comp;
//     }
//   }
// }
// }

// let x = new Country("1","2","3")
// console.table(x);

// ! 2
// class User {
//   name;
//   password;
//   email;
//   userName;
//   constructor(name, password, email, userName) {
//     this.name = name;
//     this.password = password;
//     this.email = email;
//     this.userName = userName;
//   }
// }
// let nameInput = document.getElementById("nameInput");
// let passwordInput = document.getElementById("passwordInput");
// let emailInput = document.getElementById("emailInput");
// let userNameInput = document.getElementById("userNameInput");
// let btn = document.getElementById("btn");
// const users = [];
// const userOne = new User("liel", 654, "example@gmail.com", "lielIt");
// let userDetails;
// console.table(userOne);
// btn.onclick = (ev) => {
//   ev.preventDefault();
//   userDetails = new User(
//     nameInput.value,
//     passwordInput.value,
//     emailInput.value,
//     userNameInput.value
//   );
//   users.push(userDetails);
//   console.table(users);
//   CheckIfSimilar(userOne, userDetails);
// };
// function CheckIfSimilar(arr, newUser) {
//   if (arr.indexOf(newUser)) {
//     return console.log("the same");
//   }
//   return console.log("not the same");
// }

// btn.onclick((e) => {
//   e.preventDefault();
//   let userDetails = new User(
//     nameInput,
//     passwordInput,
//     emailInput,
//     userNameInput
//   );
//   console.table(userDetails);
// });
// class Car {
//   comp;
//   year;
//   star = 0;
//   static counter = 0;
//   constructor(company, year, star) {
//     this.comp = company;
//     this.year = year;
//     this.star = star;
//     Car.counter++;
//   }
//   static returnNew(obj1, obj2) {
//     if (obj1.year > obj2.year) {
//       return obj1;
//     }
//     return obj2;
//   }
//   static returnCampany(ob1, ob2) {
//     if (ob1.star > ob2.star) {
//       return ob1.comp;
//     }
//   }
// }
// let carOne = new Car("volvo", 2020, 55);
// let carTow = new Car("tesla", 1955, 52);
// console.log(Car.returnNew(carOne, carTow));
// console.log(Car.counter);
// console.log(Car.returnCampany(carOne, carTow));

// class Cat {
//   name;
//   age;
//   color;
//   constructor(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//   }
// }

// class Lion extends Cat {
//   w;
//   constructor(name, age, color, w) {
//     super(name, age, color);
//     this.w = w;
//   }
// }
// class Puma extends Cat {}
// class tiger extends Cat {}
// const cat = new Lion("pukit", 0.5, "bea", 2);
// console.table(cat);
