// function fun(print) {
//   print();
// }
// function print() {
//   console.log("hello");
// }

// let myPromise1 = new Promise((resolve, reject) => {});

// let myPromise2 = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("hello");
//   } else {
//     reject("goodbye");
//   }
// });

// let myPromise3 = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("yes");
//   } else {
//     reject("no");
//   }
// });
// function promiseFun(pr) {
//   return new Promise((resolve, reject) => {
//     if (pr) {
//       resolve("yes");
//     } else {
//       reject("no");
//     }
//   });
// }
// promiseFun(false)
//   .then((res) => {
//     return console.log(res);
//   })
//   .catch((rej) => {
//     return console.log(rej);
//   });

// function ff(number) {
//   return new Promise((resolve, reject) => {
//     number > 100 ? resolve("big") : reject("small");
//   });
// }

// ff(852)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// function callName(someName) {
//   return new Promise((resolve, reject) => {
//     someName.length > 4 ? resolve("long name") : reject("shot name");
//   });
// }
// callName("liel")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });
const ar = ["omer", "liel", "shilat", "bityamin", "malachi"];
function arrayAndName(arr, someName) {
  return new Promise((resolve, reject) => {
    if (arr.indexOf(someName) != -1) {
      resolve("name exist");
    } else {
      reject("not exist");
    }
  });
}
arrayAndName(ar, "liel")
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
