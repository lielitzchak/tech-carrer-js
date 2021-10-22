// !exeresie 1 part one
// function returnPromise(str) {
//   return new Promise((resolve, reject) => {
//     str == "liel" ? resolve("the same") : reject("not the same");
//   });
// }

// returnPromise("liel")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });
// async function callFunction_returnPromise(str) {
//   return returnPromise(str);
// }
// callFunction_returnPromise("omer")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally();

// function returnPromise2() {
// try{
//     returnPromise()
// }}
// !exeresie 1- part tow
// function jkjkjk() {}
// !exeresie 2
// function checkIfSame(num1, num2) {
//   return new Promise((resolve, reject) => {
//     num1 == num2 ? resolve("the same") : reject("not the sam");
//   });
// }
// async function call_checkIfSame(num1, num2) {
//   return checkIfSame(num1, num2);
// }
// call_checkIfSame(5, 525)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// !exeresie 3
// let sec = document.getElementById("sec");
// function showInWindow() {
//   sec.innerHTML = `<img id="gif" src="./loading.gif">`;
// }
// function displayNon() {
//   sec.style.display = "block";
// }

// function returnString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       string.length > 6 ? resolve("more 6") : reject("less 6");
//     }, 4000);
//   });
// }

// async function call_returnString(num) {
//   try {
//     showInWindow();
//     return await returnString(num);
//   } catch (error) {
//     return error;
//   }
// }
// call_returnString("lijhgfdcel")
//   .then((res) => {
//     console.log(res);
//     sec.innerHTML = `<p>result: ${res}</p>`;
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {
//     displayNon();
//   });

// !exeresie 4
// class Dog {
//   name;
//   age;
//   type;
//   constructor(name, age, type) {
//     this.name = name;
//     this.age = age;
//     this.type = type;
//   }
// }
//!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function errorFunction() {
//   return "your object is not good";
// }
// function returnTheOlder(arr) {
//   let max = arr[0]; // pukit
//   for (const item of arr) {
//     if (max.age < item.age) {
//       max = item;
//     }
//   }
//   return max;
// }

// const DOGS = [];
// let dog1 = new Dog("pukit", 11, "cat");
// let dog2 = new Dog("shely", 2, "piciinez");
// let dog3 = new Dog("kay", 1, "dontKnow");
// DOGS.push(dog1, dog2, dog3);

// function allObject(arr) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(returnTheOlder(arr));
//       reject();
//     }, 2000);
//   });
// }
// allObject(DOGS)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {});
// async function returnInWindow(arr) {
//   allObject(arr)
//     .then((res) => {
//       document.body.innerHTML += allObject(res) + "res";
//     })
//     .catch((rej) => {
//       document.body.innerHTML += allObject(rej) + "rej";
//     })
//     .finally(() => {});
// }

// returnInWindow(DOGS);
