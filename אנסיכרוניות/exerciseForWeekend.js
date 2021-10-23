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
// async function returnPromise2() {
//   try {
//     await returnPromise();
//   } catch (error) {
//     console.log(error);
//   }
// }
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
// function returnTheOlder(arr) {
//   let max = arr[0];
//   for (const item of arr) {
//     if (max.age < item.age) {
//       max = item;
//     }
//   }
//   return max;
// }
// function showTheImg() {
//   return (sec.innerHTML = `<img id="imgLoading" src="./loading-cute.gif">`);
// }
// let imgLoading = document.getElementById("imgLoading");

// function displayTheImg() {
//   return (imgLoading.style.display = "none");
// }

// const DOGS = [];
// let dog1 = new Dog("pukit", 11, "cat");
// let dog2 = new Dog("shely", 2, "piciinez");
// let dog3 = new Dog("kay", 1, "dontKnow");
// DOGS.push(dog1, dog2, dog3);

// function allObject(arraysDogs) {
//   showTheImg();
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       arraysDogs
//         ? resolve(returnTheOlder(arraysDogs))
//         : reject("the details is not found. please try again");
//     }, 2000);
//   });
// }
// async function call_allObject(arr) {
//   try {
//     return await allObject(arr);
//   } catch (error) {
//     return error;
//   }
// }
// call_allObject(DOGS)
//   .then((res) => {
//     sec.innerHTML = `the big is: ${res.name}, she is ${res.age} years old, and the type is ${res.type}`;
//     console.log(res);
//   })
//   .catch((rej) => {
//     sec.innerHTML = rej;
//     console.log(rej + "hello everyone");
//   })
//   .finally(() => {
//     return displayTheImg();
//   });
//!\\\\\\\\\\\\\\\\\\\\\\\\\\\\   second    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let sec = document.getElementById("sec");

// function checkOlder(arrDogs) {
//   let max = arrDogs[0];
//   for (const item of arrDogs) {
//     if (max.age < item.age) {
//       max = item;
//     }
//   }
//   return max;
// }
// function showImg() {
//   return (sec.innerHTML = `<img id="imgLoading" src="./loading-cute.gif">`);
// }
// let imgLoading = document.getElementById("imgLoading");

// function displayImg() {
//   return (imgLoading.style.display = "block");
// }
// function error() {
//   return "error";
// }
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
// let dog1 = new Dog("hamburger", 8522, "Toller ");
// let dog2 = new Dog("coffee", 10, "Toller ");
// let dog3 = new Dog("freedom", 2, "Toller ");
// const DOGS = [dog1, dog2, dog3];
// function timingShow(arr) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (arr !== Array) {
//         return reject(error());
//       } else {
//         return resolve(checkOlder(arr));
//       }
//     }, 500);
//   });
// }
// async function call_timingShow(ar) {
//   try {
//     showImg();
//     return await timingShow(ar);
//   } catch (error) {
//     return error;
//   }
// }

// call_timingShow(8)
//   .then((res) => {
//     sec.innerHTML = `the big is: ${res.name}, she is ${res.age} years old, and the type is ${res.type}`;
//     console.log(res);
//   })
//   .catch((rej) => {
//     sec.innerHTML = `type error: ${rej}`;
//     console.log(rej);
//   })
//   .finally(() => {});

//!\\\\\\\\\\\\\\\\\\\\\\\\\\\\   1    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let names = new Map();
// names.set("moshe", 45);
// names.set("orly", 44);
// names.set("omer", 23);
// names.set("sav", 85);
// names.set("liel", 21);
// names.set("shilat", 16);
// names.set("benjamin", 14);
// names.set("malachi", 8);
// names.set("orel", 2);
// //  console.log(names.values());
// //  console.log(names.keys());
// for (let item of names) {
//   item[0].length > 4 ? console.log(item[0]) : item[0];
// }

let Apartments = new Map();
Apartments.set(1, 4);
Apartments.set(2, 6);
Apartments.set(3, 10);
Apartments.set(4, 20);

// function newPromise() {
//   return new Promise((resolve, reject) => {
//     resolve(largestTenants(arr));
//   });
// }

// function largestTenants(arr) {
let max = Apartments[1];
console.log(max);
for (const item of Apartments) {
  if (item[1] > max) {
    max = item;
  }
}
// }
// console.log(largestTenants(Apartments));
