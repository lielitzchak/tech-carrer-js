let x= 4




































//! Exercise 1
// const CONECT = `{
//     "name": "liel",
//    "massage":"hello world",
//     "email":"liel@gmail.com"
// }`;
// console.log(CONECT);
// console.log(JSON.parse(CONECT));
//! Exercise 2
// let forJS = document.getElementById("forJS");
// const CARS_AND_SHIPS = `{
//     "cars":[{"model":"mazda", "price": 200,"year": 2020}],
//     "ships":[{"name":"titanic","years": 2021,"agina": "tel-aviv", "photo": "https://images.unsplash.com/photo-1633177031940-61beb547f15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
//     {"name":"titanic2","years": 1998,"agina": "jerusalem", "photo": "https://images.unsplash.com/photo-1633177031940-61beb547f15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}]
// }`;
// let CONVERT = JSON.parse(CARS_AND_SHIPS);
// CONVERT.ships.forEach((element) => {
//   forJS.innerHTML += `<section>
//             <h1>${element.name}</h1>
//             <h1>${element.years}</h1>
//             <h1>${element.agina}</h1>
//             <img src="${element.photo}" alt="jhjh">
//     <br>
//     </section>`;
// });
//! Exercise 3
// let input_name = document.getElementById("input_name");
// let input_email = document.getElementById("input_email");
// let input_massage = document.getElementById("input_massage");
// const btn = document.getElementById("btn");
// const CONECT_US = `{
//     "name": "${input_name.value}",
//    "massage":"${input_email.value}",
//     "email":"${input_massage.value}"
//  }`;
// btn.onclick = (e) => {
//   e.preventDefault();
//   let NEW_CONECT_US = {
//     name: `${input_name.value}`,
//     massage: `${input_email.value}`,
//     email: `${input_massage.value}`,
//   };
//   return console.log(JSON.stringify(NEW_CONECT_US));
// };
//! Exercise 4
// function to_json(obj) {
//   return JSON.stringify(obj);
// }
//! Exercise 5
// function from_json(get_json) {
//   return JSON.parse(get_json);
// }
//! Exercise 6
// function Doubling_age_by_3_will_return(user_obj) {
//   user_obj = {
//     name: "liel",
//     age: 21,
//     email: "liel@gmil.com",
//   };
//   user_obj.age = user_obj.age * 3;
//   console.log(user_obj);
//   console.log(JSON.stringify(user_obj));
// }
// Doubling_age_by_3_will_return();
