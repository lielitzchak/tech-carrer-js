//! exercise 1
// class Car {}
//! exercise 2
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
//! exercise 3
// class Cat {
//   name;
//   age;
//   typ;
//   constructor(name, age, typ) {
//     this.name = name;
//     this.age = age;
//     this.typ = typ;
//   }
// }
//! exercise 4
// class Student {
//   name;
//   cLass;
//   hight;
//   constructor(name, cLass, hight) {
//     this.name = name;
//     this.cLass = cLass;
//     this.hight = hight;
//   }
// }
//! exercise 5
// let me = new Student("liel", "full", 158);
//! exercise 6
// let friend = new Student("sagedu", "full", 170);
//! exercise 7
// class Work {
//   name;
//   lName;
//   birth;
//   phone;
//   constructor(name, lName, birth, phone) {
//     this.name = name;
//     this.lName = lName;
//     this.birth = birth;
//     this.phone = Number(phone);
//   }
// }
// let sag = new Work("sagedu", "abe", "1996", "05412121211");
// let liel = new Work("liel", "itzchak", 2000, "0547080093");
// let x = [56, 652, 685, 685, 3, "fgdf", "gdfsdczscdxvfbgf"];

// console.table(liel);
//! exercise 8
// let inputName = document.getElementById("name_Input");
// let InputLName = document.getElementById("lName_Input");
// let inputAge = document.getElementById("age_Input");
// let btn = document.getElementById("btn");
// let par = document.getElementById("par");
let tbl = document.getElementById("tbl");
// class Person {
//   name;
//   lName;
//   age;
//   constructor(name, lName, age) {
//     this.name = name;
//     this.lName = lName;
//     this.age = age;
//   }
// }
// const users = [];
// btn.onclick = (ev) => {
//   ev.preventDefault();
//   users.push(new Person(inputName, InputLName, inputAge));
//   for (const userItem of users) {
//     tbl.innerHTML = `
//         <tr>
//              <td>${userItem.name.value}<td>
//              <td>${userItem.lName.value}<td>
//              <td>${userItem.age.value}<td>
//          </tr>`;
//   }
// };
// ! exercise 9
// let inputName = document.getElementById("name_Input");
// let InputLName = document.getElementById("lName_Input");
// let inputAge = document.getElementById("age_Input");
let divForForm = document.getElementById("divforForm");
// let btn = document.getElementById("btn");
// class NewName {
//   name;
//   Lname;
//   age;
//   constructor(name, Lname, age) {
//     this.name = name;
//     this.Lname = Lname;
//     this.age = age;
//   }
//   printButton() {
//     return this.name.value;
//   }
// }
// const People = [];

// btn.onclick = (ev) => {
//   ev.preventDefault();
//   People.push(new NewName(inputName, InputLName, inputAge));
//   for (const iterator of People) {
//     divForForm.innerHTML = `
//   <button>${iterator.printButton()}</button>
//   `;
//     console.log(iterator.name.value);
//   }
// };
let name_Input = document.getElementById("name_Input");
let lName_Input = document.getElementById("lName_Input");
let age_Input = document.getElementById("age_Input");
let email_Input = document.getElementById("email_Input");
let clAcc_Input = document.getElementById("clAcc_Input");
let birth_Input = document.getElementById("birth_Input");
let pic_Input = document.getElementById("pic_Input");
let btn = document.getElementById("btn");

// let pic = document.getElementById("asaf_test");

// let img = document.createElement("img");

// function show_image(src, width, height, alt) {

//     img.src = src;
//     img.width = width;
//     img.height = height;
//     img.alt = alt;

//     // This next line will just add it to the <body> tag
//     document.body.appendChild(img);
// }

// show_image()

class Student {
  name;
  lName;
  age;
  email;
  clAcc;
  birth;
  pic;
  returnString = function (name, lName, age, email, clAcc, birth, pic) {
    name.toString;
  };
  constructor(name, lName, age, email, clAcc, birth, pic) {
    this.name = name;
    this.lName = lName;
    this.age = age;
    this.email = email;
    this.clAcc = clAcc;
    this.birth = birth;
    this.pic = pic;
  }
}
const Students = [];
console.log("in first", Students);

// let imges = document.createElement("img");
// /*יצירת אלמנט תמונה מגאווה סקריפט ישירות לHTML */
// let imgAttribute;

// imgAttribute.setAttribute("src", "/images");
// imgAttribute.setAttribute("height", "120"); /*הגדרת גובה התמונה */
// imgAttribute.setAttribute("width", "120"); /*הגדרת רוחב התמונה */
// let picx =
//   document.getElementById("asaf_test"); /*יצירת קשר עם הDIV שיצרתי ב-HTML */
// picx.appendChild(imgAttribute); /*פה אני משייך הכול ל-DIV ב-HTML */

btn.onclick = (e) => {
  e.preventDefault();
  Students.push(
    new Student(
      name_Input.value,
      lName_Input.value,
      age_Input.value,
      email_Input.value,
      clAcc_Input.value,
      birth_Input.value,
      pic_Input
    )
  );
  // console.log(Students);
  for (const iterator of Students) {
    tbl.innerHTML += ` 
      <tr>
        <td>${iterator.name}</td>
        <td>${iterator.lName}</td>
        <td>${iterator.age}</td>
        <td>${iterator.email}</td>
        <td>${iterator.clAcc}</td>
        <td>${iterator.birth}</td>
        <td><img id="imgTbl" src="${iterator.pic}" onclick="changTo(this)" alt=""></td>
      </tr><br>
    `;
    console.log(iterator);
  }
};
// console.log(Students);

// צרו פונקציה במחלקה שמחזירה את הנתונים של התלמיד כסטרינג.
// צרו פונקציה במחלקה שמדפיסה את הנתונים ללוג.
// כאשר לוחצים על שלח, נוסף כפתור עם השם של התלמיד שנוצר, ובעת לחיצה מודפס ללוג המידע של האובייקט.
//! יש לסיים את המחשבון.
