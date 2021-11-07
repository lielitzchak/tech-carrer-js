// class Computer {
//   nameCompany;
//   model;
//   years;
//   color;
//   constructor(nameCompany, model, years, color) {
//     this.nameCompany = nameCompany;
//     this.model = model;
//     this.years = years;
//     this.color = color;
//   }
// }
// let btn = document.getElementById("btn");
// let computer1 = new Computer("lenovo", "brand1", 1985, "red");
// let computer2 = new Computer("apple", "brand2", 2021, "red");
// let computer3 = new Computer("dell", "brand2", 2021, "red");
// const ARR_COMPUTERS = [computer1, computer2, computer3];
// let compMap = new Map();
// ARR_COMPUTERS.forEach((compItem) => {
//   compMap.set(compItem.model, compItem);
// });

// console.log(compMap);
// btn.onclick = () => {
//   if (compMap.has("brand1")) {
//     alert("its exist");
//   } else {
//     alert("doesn't exist");
//   }
// };

//! משימת סטודנטים
class Student {
  fname;
  lname;
  age;
  GPA;
  constructor(fname, lname, age, GPA) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.GPA = GPA;
  }
}
let student1 = new Student("shilat", "itzchak", 16, 100);
let student2 = new Student("omer", "itzchak", 23, 100);
let student3 = new Student("liel", "itzchak", 21, 100);
let studentMap = new Map();
studentMap.set("omer", student2);
studentMap.set("shilat", student1);
studentMap.set("liel", student3);

for (const key of studentMap.keys()) {
  document.body.innerHTML += `<div class="divs" id="${key}" onmouseover="ShowOnOver(studentMap,this.id)" onmouseout="displayOnOver()">${key}</div><br><br>`;
}
let divs = document.getElementsByClassName("divs");
function ShowOnOver(map, key) {
  let div = document.getElementById(key);
  div.style.width = "150px";
  div.style.height = "150px";

  div.innerHTML += `<br><br>${map.get(key).fname},${map.get(key).lname},${
    map.get(key).age
  }`;
}
function displayOnOver() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.width = "100px";
    divs[i].style.height = "100px";
    divs[i].innerHTML = divs[i].id;
  }
}
