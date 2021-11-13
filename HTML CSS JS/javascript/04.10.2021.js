//! exeresie 1
// let toJs = document.getElementById("toJs");
// function Cars(name, price, dicC, pic1, pic2) {
//   this.name = name;
//   this.price = price;
//   this.dicC = dicC;
//   this.picture = [pic1, pic2];
//   this.UpdateD = function (foThis) {
//     this[key] = foThis;
//   };
// }
// const Car1 = new Cars(
//   "mazda",
//   20000,
//   10000,
//   "https://did.li/W8HNf",
//   "https://did.li/djarl",
//   44
// );
// console.log(Car1);
// const Car2 = new Cars(
//   "volvo",
//   21210,
//   10000,
//   "https://did.li/W8HNf",
//   "https://did.li/djarl"
// );
// const shirts = new Cars(
//   "T-shirts",
//   120,
//   100,
//   "https://did.li/3QwlC",
//   "https://did.li/j3YYH"
// );
// console.log(shirts);

//! exeresie 1.a

// const people = new Person("liel", 21);
// console.log(people);
// const new_person = new Person("omer", 22);
// console.log(new_person);

// class Cars {
//   constructor(model, years, km) {
//     (this.model = model), (this.years = years), (this.km = km);
//   }
// }
// const car1 = new Cars("mazda", 2020, 12000);
// console.log(car1);

//! exeresie 2
// const Cars = [
//   {
//     model: "mazda",
//     price: 7410,
//     years: 2020,
//     km: 1000,
//     speed: 7420,
//     add_Km: function () {
//       return (this.speed += this.speed + 15);
//     },
//     lassSpeed: function () {
//       return (this.speed -= this.speed - 15);
//     },
//   },
//   {
//     model: "volvo",
//     price: 7410,
//     years: 2020,
//     km: 1000,
//     speed: 7420,
//     add_Km: function () {
//       return (this.speed += this.speed + 15);
//     },
//     lassSpeed: function () {
//       return (this.speed -= this.speed - 15);
//     },
//   },
//   {
//     model: "something",
//     price: 7410,
//     years: 2020,
//     km: 1000,
//     speed: 7420,
//     add_Km: function () {
//       return (this.speed += this.speed + 15);
//     },
//     lassSpeed: function () {
//       return (this.speed -= this.speed - 15);
//     },
//   },
// ];
// console.log(Cars);
//! exeresie 3
// function NewCar() {
//   (this.model = "mazda"),
//     (this.price = 7410),
//     (this.years = 2020),
//     (this.km = 7410),
//     (this.speed = 100),
//     (this.add_km = function () {
//       return (this.speed = this.speed += 15);
//     }),
//     (this.lassSpeed = function () {
//       return (this.speed = this.speed -= 15);
//     });
// }
// const cars = [];
// cars.push(new NewCar(), new NewCar(), new NewCar());
// console.log(cars);
// console.log(cars[0].add_km());
// console.log(cars[0].lassSpeed());

//! exeresie 4l
let toJs = document.getElementById("toJs");
// function User(name, email, age, picProfile) {
//   if (typeof name != "string") return null;
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.profile = picProfile;
//   this.upAge = function (key, value) {
//     return (this[key] += value);
//   };
//   this.render = function () {
//     toJs.innerHTML = `<b>name:</b> ${this.name} <br>
//        <b> email:</b> ${this.email} <br>
//         <b>age:</b> ${this.age} <br>
//        <b> pic:</b><img src="${this.profile}" alt="" style="width: auto; height: 100px;">
//         `;
//   };
// }

// const users = new User("liel", "liel@gmail.com", 20, "https://did.li/uAlTY");
// console.log(users);
//! exeresie 4.a
// console.log(users.upAge("age", 2));
//! exeresie 4.b
// users.render();
//! exeresie 4.c
function Article(Title, author, date) {
  this.Title = Title;
  this.author = author;
  this.date = date;
  this.render = function () {
    toJs.innerHTML = `
    <p>the title: ${this.Title} <br>
    the author: ${this.author} <br>
    the date: ${this.date}</p>`;
  };
}
const Articles = [];
Articles.push(new Article("the title", "the author", "04.102021"));
for (let i = 0; i < Articles.length; i++) {
  Articles[i].render();
}
console.log(Articles);
