// מבנה נתונים שעובד בצורה כזו שמי שנכנס ראשון יוצא ראשון, הסדר הוא כרונולוגי, זאת אומרת לפי מי שנכנס קודם
// fifo- הראשון שנכנס הוא הראשון שיוצא
// function Queue() {
//   this.theArray = [];
//   this.enQueue = function (num) {
//     this.theArray.unshift(num);
//     return this.theArray;
//   };
//   this.deQueue = function () {
//     return this.theArray.pop();
//   };
// }
// let qe = new Queue();
// qe.enQueue(1);
// qe.enQueue(2);
// qe.enQueue(3);
// console.log("added and removed-", qe.deQueue());
// console.log(qe);

let input = document.getElementById("InputUserFirstName");
let btn = document.getElementById("btn");
let par = document.getElementById("par");
let btnAdd = document.getElementById("btnAdd");

function Queue() {
  this.array = [];
  this.enQueue = function (name) {
    return this.array.unshift(name);
  };
  this.deQueue = function () {
    return this.array.pop();
  };
}

const qe = new Queue();
qe.enQueue("part one");
qe.enQueue("part two");
console.log(qe);
btnAdd.onclick = (e) => {
  e.preventDefault();
  console.log(qe.enQueue(input.value));
  console.log(qe);
};

btn.onclick = function clickOnFunction(e) {
  e.preventDefault();
  setInterval(() => {
    const remove = qe.deQueue();
    if (remove) {
      console.log(qe);
    }
  }, 200);
};

