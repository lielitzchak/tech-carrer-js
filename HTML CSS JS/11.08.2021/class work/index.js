// function sumArray(sumOfNumber) {
//   var theSum = 0;

//   for (var i = 0; i < sumOfNumber.length; i++) {
//     theSum += sumOfNumber[i];
//   }
//   return theSum;
// }
// console.log(sumArray([1,2,3]));

// function avgArray(sumOfNumber) {
//     var theSum = 0;
//     var avg;

//     for (var i = 0; i < sumOfNumber.length; i++) {
//       theSum += sumOfNumber[i];
//       var avg = theSum/sumOfNumber.length;
//     }
//     return avg;
//   }
//   console.log(avgArray([100,100,95,100]));

// מציאת אינדקס שבמערך ...............................................................
// var gusseGame = [1,2,3],
// userInput= +prompt("giva a number");
// if (userInput){
//     for (var i = 0; i < gusseGame.length ; i++){

// }
// }





function BackSum(numbr) {
  var sum;
  for (var i = 0; i < numbr; i++) {
    sum = numbr % 10;
    numbr = sum;
    sum += numbr;
  }
  return sum;
}
console.log(BackSum(166));
