// exeresie 1
// function print4Sec() {
//   window.setInterval(() => {
//     console.log("liel");
//   }, 4000);
// }
// print4Sec()

// exeresie 2

// function exe2() {
//   window.setInterval(() => {
//     alert("itzchak");
//   }, 3000);
// }
// exe2()

// exeresie 3
// function fullName() {
//   window.setInterval(() => {
//     document.write("liel itzchak");
//   }, 2000);
// }
// fullName();

// exeresie 4

// function addMone() {
//   var counter = 0;
//   window.setInterval(() => {
//     document.write(counter);
//     counter++;
//   }, 1000);
// }
// addMone()
// var divHTML = document.getElementById("divHTML");

// exeresie 5
// function AddToP() {
//   window.setInterval(() => {
//     parg.innerHTML += "<p><P>";
//   }, 2000);
// }
//  AddToP();

// exeresie 6
// function printPWithId() {
//   counter = 0;
//   window.setInterval(() => {
//     document.getElementById("parg").innerHTML += `<p id="${counter++}"></p>`;
//   }, 2000);
// }
// printPWithId();

// exeresie 7

// function printDivEvery2sec() {
//   window.setInterval(() => {
//     document.getElementById("parg").innerHTML += `<div></div>`;
//   }, 2000);
// }
// printDivEvery2sec();

// exeresie 8

// exeresie 10

// function exe10() {
//   console.log(
//     setTimeout(() => {
//       console.log("liel");
//     }, 4000)
//   );
// }
// exe10();

// exeresie 10
// var internalId;

// var myDiv = document.getElementById("myDiv"),
//   btnPlay = document.getElementById("btnPlay"),
//   btnStop = document.getElementById("btnStop"),
//   bigDiv = document.getElementById("bigDiv"),
//   myDiv = document.getElementById("myDiv"),
//   size = 0,
//   width = 0,
//   hight = 0;

// function stopButton() {
//   btnStop.onclick = () => {
//     window.clearInterval(internalId);
//   };
// }

// btnPlay.onclick = () => {
//   internalId = window.setInterval(() => {
//     myDiv.style.left = `${size++}px`;
//     if (size > 200) {
//       window.clearInterval(internalId);
//     }
//     if (size > 200) {
//       internalId = window.setInterval(() => {
//         if (size > 200) {
//           myDiv.style.top = `${hight++}px`;

//           window.clearInterval(internalId);
//         }
//       }, 7);
//     }
//   }, 5);
// };

// window.setInterval(() => {
//   var dateObject = new Date();
//   document.getElementById("divTimer").innerHTML = `${dateObject.getHours()}:
//   ${dateObject.getMinutes()}:${dateObject.getSeconds()} `;
// }, 1000);

//! avi's work
// window.setInterval(()=>{console.log("avi")},4000)
// window.setInterval(()=>{alert("admaso")},3000)
// window.setInterval(()=>{document.write("avi admaso ")},2000)

// function mone (){
//     var counter = 0
//     var stopIt = window.setInterval(()=>{document.write(counter++)},1000)
//     if(counter ==5){
//         clearInterval(stopIt)
//     }

// }mone()

// function elementP (){

//     window.setInterval(()=>{document.write(`<p></p>`)},1000)
// }elementP()

// function elemenPId (){
//     window.setInterval(()=>{document.write(`<p id="pId"></p>`)},2000)
// }elemenPId ()

// function elementDiv (){
//     window.setInterval(()=>{document.write(`<div></div>`)},3000)
// }elementDiv ()

// function elementDivWithnP(){
//     window.setInterval(()=>{document.write(`<div><p id="div&p"></p></div>`)},9000)
// }elementDivWithnP()

// function stopIn7() {
//   var counter = 0;
//   var stopIt = window.setInterval(() => {
//     document.write(counter);
//     counter++;
//     if (counter == 7) {
//       window.clearInterval(stopIt);
//     }
//   }, 2000);
// }
// stopIn7();

// function printName (){
//     window.setTimeout(()=>{
//         console.log("avi")
//     },4000)

// }printName()

// function printLname(){
//     window.setTimeout(()=>{
//         alert("admaso")
//     },3000)
// }printLname ()

// function prinFullName(){
//     window.setTimeout(()=>{
//         document.write("avi admaso")
//     },2000)
// }prinFullName()

// function cancelAlert(){
//     window.setTimeout(()=>{
//         alert("wae up nigga")
//     },10000)
// }cancelAlert()

// var myD

// var stop = document.getElementById("stop");
// var start = document.getElementById("start");
// var riboa = document.getElementById("riboa");
// var size = 1;
// var sizeNew = 0;
// var right = 0

// start.onclick = function () {
//   var stopIt = window.setInterval(() => {
//     riboa.style.left = `${size++}px`;
//     if (size == 500) {
//       window.clearInterval(stopIt);

//     };

//         window.setInterval(() =>{
//             riboa.style.top = `${sizeNew++}px`;
// if(sizeNew==500){window.clearInterval(stopIt)};
//         ,5)

//     }if(right==300){
//         riboa.style.left = `${right--}px`;
//     }

//   }, 5);
//   riboa.style.left = `${size--}px`;
//   stop.onclick = function () {
//     window.clearInterval(stopIt);
//   };
// };

// window.setInterval(() => {
// var theDate = new Date();

//     theDate.getHours();
//     theDate.getMinutes();
//     theDate.getSeconds();
//     myDiv.innerHTML = `${theDate.getHours()}:${theDate.getMinutes()}:${theDate.getSeconds()}`
// }, 1000);

// function printWordByWord (){
//     for(var i = 0;i<text.length;i++)
// }

// function printName(){
//     let firstName = (["a","v","i","a","d","m","a","s","o"])
//     for(var i = 0;i<firstName.length;i++){
//         window.setInterval(()=>{console.log(firstName[i])},1000)
//     }
// }printName()

// var intervalId;
// var stopAnima = document.getElementById("stop");
// var boxDiv= document.getElementById("box");
// var size =0;
// var width=0;
// var height=0;
// document.getElementById("play").onclick=()=>{
//     intervalId = window.setInterval(()=>{
//         boxDiv.style.left = `${size++}px`
//         if(size==300){
//             clearInterval(intervalId)
//         // }
//         // if(size==300){
//             intervalId =  window.setInterval(()=>{
//                   boxDiv.style.top = `${height++}px`
//                 if(height==300){
//                     clearInterval(intervalId)

//                     intervalId = window.setInterval(()=>{
//                         boxDiv.style.width = `${width--}`
//                         if(width==300){
//                             clearInterval(intervalId)
//                         }
//   …

myArray = [5, 8, 4, 7, 2, 1, 5];

function getSomthing(array) {
  for (let i = 0; i < 3; i++) {
    console.log(array);
  }
}
getSomthing(myArray);


var stringHello = "hello";
console.log(stringHello.length);

var newArray = [2, 5, 7, 1, 9];
console.log(newArray.length);
console.log(newArray);

newArray.push(10000);
console.log(newArray);

newArray.pop();
console.log(newArray);

newArray.splice(newArray.length - 3, 3);
console.log(newArray);

var cars = {
  shnaton: 2015,
  model: "idk",
  price: 100,
  fast: 50,
  maxFast: () => {
   return this.fast + 10;
  },
};

console.log(cars.fast);