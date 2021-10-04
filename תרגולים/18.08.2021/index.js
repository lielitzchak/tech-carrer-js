// // 1

// const some = document.getElementById("btn");
// some.addEventListener("click", function () {
//   console.log("i was clicked");
// });

// const someP = document.getElementById("myP");
// someP.addEventListener("click", function () {
//   console.log("i was clicked");
// });

// // 2
// let ex2 = document.getElementById("oneP");
// let ex23 = document.getElementById("secuendP");

// ex2.addEventListener("click", function () {
//   ex23.innerText ="jhjh"
// });
// ex23.addEventListener("click" , function(){
//     ex2.innerHTML = "test for js+html"
// })

// 3

// ..........................................................................................
// ..........................................................................................
// ..........................................................................................
// ..........................................................................................
// ..........................................................................................
// ..........................................................................................

let imagees = document.getElementsByClassName("imges");
for (let i = 0; i < imagees.length; i++) {
  imagees[i].addEventListener("click", function () {
    imagees[i].style = "width:0px; height:0px";
  });
}

// ..........................................................................................
// ..........................................................................................

let redSircel = document.getElementById("sircRed");
let greenSircel = document.getElementById("sirGreen");
let blueSircel = document.getElementById("sirBlue");

redSircel.style =
  "width:50px; height:50px; background-color:red; border-radius:50px; display:inline-block";
blueSircel.style =
  "width:50px; height:50px; background-color:blue; border-radius:50px; display:inline-block";
greenSircel.style =
  "width:50px; height:50px; background-color:green; border-radius:50px; display:inline-block";

redSircel.addEventListener("click", function () {
  redSircel.style = "display:inline-block";
});
greenSircel.addEventListener("click", function () {
  greenSircel.style = "display:inline-block";
});
blueSircel.addEventListener("click", function () {
  blueSircel.style = "display:inline-block";
});

let butom = document.getElementById("btn1");
let para = document.getElementById("par");

para.style = " width:90px; height:50px ";

butom.style = " width:100px; height:50px ";

myDiv.addEventListener("click", function () {
  myDiv.innerText = "i was change";
});

let allP = document.getElementsByTagName("p");
for (let i = 0; i < allP.length; i++) {
  allP[i].style = "width:100px; height:50px;background-color:pink;";
}
