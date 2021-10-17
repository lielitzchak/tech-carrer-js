// // exeresie 1

// var toDoList = [
//   {
//     Name: "workout ",
//     isCompleted: true,
//   },
//   {
//     Name: " something ",
//     isCompleted: false,
//   },
//   {
//     Name: " go to shopping ",
//     isCompleted: true,
//   },
//   {
//     Name: " do nails ",
//     isCompleted: false,
//   },
//   {
//     Name: " home Work",
//     isCompleted: true,
//   },
// ];

// // exeresie a
// var inputUser = document.getElementById("myInput");
// var btn = document.getElementById("btn");
// var p = document.getElementById("p");
// for (let i = 0; i < toDoList.length; i++) {
//   document.write(`${toDoList[i].Name}, ${toDoList[i].isCompleted}.</br>`);
// }
// // exeresie b
// btn.onclick = function addNewObject() {
//   var newObject = {
//     Name: inputUser.value,
//     isCompleted: false,
//   };
//   //   exeresie c+d
//   toDoList.push(newObject);
//   p.innerHTML += `<p>${newObject.Name}, ${newObject.isCompleted}</p><br>`;
// };

// //! exeresie e

// //! exeresie f
// if (toDoList.isCompleted) {
//   document.write(`<p >style="background: red;"${toDoList} </p>`);
// }

// exeresie 1
// var movies = [
//   {
//     Name: "new movie",
//     imgs: "https://did.li/gWSfT",
//     actors: [{ name1: "liel", nam2: "liels", nam3: "lieli" }],
//   },
//   {
//     Name: "old movie",
//     imgs: "https://did.li/x8kTY",
//     actors: [" Selena Gomez", " Justin bieber ", " yaniv katan "],
//   },
// ];
// exeresie 1.a
// for (let i = 0; i < movies.length; i++) {
//   p.innerHTML = ` ${movies[i].Name} , ${movies[i].imgs} , ${movies[i].actors} `;
// }

// exeresie 2
// var inputExe2 = document.getElementById("inputB1");
// var buttn = document.getElementById("btnB1");
//  buttn.onclick = function pushToMovies(){
// inputExe2.nodeValue
//    document.write(`${}`)
//  }