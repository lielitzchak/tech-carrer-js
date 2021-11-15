// let objJASON = {
//   name: "liel",
//   age: 26,
//   city: "talmon",
//   car: false,
// };
// let toJAson = JSON.stringify(objJASON);
// console.log(toJAson);

// let toJS = JSON.parse(toJAson);
// console.log(toJS);
// let MOVIES = [
//   { name: "some1-1", play: "some1-2", film: "some1-3" },
//   { name: "some2-4", play: "some2-2", film: "some2-3" },
// ];
// let MOVIES_toJson = JSON.stringify(MOVIES);
// console.log(MOVIES_toJson);
// let MOVIES_toJS = JSON.parse(MOVIES_toJson);
// console.log(MOVIES_toJS);

// const DOGS = [
//   { name: "rexi", age: 5, type: "something" },
//   { name: "rexi2", age: 5, type: "something" },
//   { name: "rexi3", age: 5, type: "something" },
// ];

// let toJSON = JSON.stringify(DOGS);

// function dogsPromise() {
//   return new Promise((resolve, reject) => {
//     DOGS.length > 0
//       ? resolve(JSON.stringify(DOGS))
//       : reject({ massage: "its empty" });
//   });
// }

// async function getDogs() {
//   try {
//     return await dogsPromise(DOGS);
//   } catch (error) {
//     return error;
//   }
// }
// getDogs(DOGS)
//   .then((res) => {
//     console.log(JSON.parse(res));
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {});

