// 1תרגיל אתגר  ...........................................................................................................
// var usetInputOneLength = +prompt("put a Length");
// var usetInputOneWidth = +prompt("put a width");

// function challengeOne() {
//     if (usetInputOneLength *= usetInputOneWidth);
            
// return challengeOne;
// }
// console.log(challengeOne());





// תרגיל 1 ..............................................................................................................

// var lielsName = ("liel");

// function myName() {
//     for (var i = 0; i < 5; i++) {
//         console.log(lielsName);
//     }


// }
// console.log(myName())

// תרגיל 2 ...........................................................................................................


// function myName(lielsName) {
//     for (var i = 0; i < 5; i++) {
//         console.log(lielsName);
//     }


// }
// console.log(myName(("liel")))


// תרגיל 3 ...........................................................................................................
// var numOne = 4 ,
//  numTwo = 2,
// sumNum;

// function mathPlus() {
//     for (var i = 0; i < 2; i++) {
//         sumNum = numOne + numTwo

//     } console.log(sumNum)


// }
// console.log(mathPlus())


// תרגיל 4   ...........................................................................................................

// function mathPlus(numOne, numTwo, sumNum) {
//     for (var i = 0; i < 2; i++) {
//         sumNum = numOne + numTwo

//     } console.log(sumNum)


// }
// console.log(mathPlus(4, 2))

// תרגיל 5   ...........................................................................................................

// function minimum(numOne, numTwo) {
//     if ( numOne < numTwo) {
//         return numOne; 


//     }
//     else {
//         return numTwo;
//     }

// }
// תרגיל 6...........................................................................................................
// function fullNumbers(numOne) {
//     var temp,
//         sumNum = 0;
//     while (numOne > 0) {
//         temp = numOne % 10;
//         sumNum += temp;
//         numOne = parseInt(numOne/10);
//     } return sumNum;

// }
// console.log(fullNumbers(74254))
// תרגיל 7.1...........................................................................................................

// var number = [9, 1, 5, 8, 654154, 7, 74, 54];
// function nineNumber() {
//     var sumNumber = 0;
//     for (var i = 0; i < number.length; i++) {
//         sumNumber += number[i];
//     }
//     return sumNumber;
// }
// var allNumber = nineNumber();
// console.log(allNumber);

// תרגיל 7.2 ...........................................................................................................
// function multiplication() {
//     var multi = 1;
//     for (var i = 0; i < number.length; i++) {
//         multi *= number[i];
//     }
//     return multi
// }
// var multiFunction = multiplication();
// console.log(multiFunction)

// תרגיל 7.3 ..........................................................................................................
// var number = [9, 1, 5, 8, 7, 74, 54];

// function minNumber() {
//     var minimum = number[0];
//     for (var i = 1; i < number.length; i++) {
//         if (minimum > number[i]) {
//             minimum = number[i];
//         }
//     }
//     return minimum;
// }
// console.log(minNumber())

// תרגיל 7.4 ..........................................................................................................

// function minNumber() {
//     var minimum = number[0];
//     for (var i = 1; i < number.length; i++) {
//         if (minimum < number[i]) {
//             minimum = number[i];
//         }
//     }
//     return minimum;
// }
// console.log(minNumber())

// תרגיל 7.5..........................................................................................................
// var number = [9, 1, 5, 8, 7, 74, 54];

// function removeArry() {
//     for (var i = 0; i <= 1; i++) {
//       number=  number.pop();
//     }
//     return number;
// }
// var newArry = removeArry();
// console.log(newArry);

// תרגיל 8 ..........................................................................................................
// var thing = ("liel itzchak");
// function ReturnLength(){
//     return thing.length;
// }
// console.log(ReturnLength())

// // תרגיל 9 ..........................................................................................................
// var names = ["liel", "dani", "yossi"];
// var userInput = prompt("give me a name");

// function namesOfArray(names , userInput) {
//     for (var i = 0; i < names.length; i++) {
//         if (userInput == names[i]){
//             names.splice(i, 1);
//             return i;
//         }

//     }
//     return "dosent exist"

// }
// console.log(namesOfArray(names , userInput));
// תרגיל 10 ..........................................................................................................
// function ReturnOfMultiplication(array) {
//     for (var i = 0; i < array.length; i++) {
//         array[i] *= 3;
//     }
//     return array;
// }
// var Multiplic = ReturnOfMultiplication([45, 21, 87, 21, 98, 65]);
// console.log(Multiplic);

// תרגיל 11 ..........................................................................................................


// function NoRepeat(numbrA) {
//     for (var i = 0; i < numbrA.length; i++) {
//         for (var j = i + 1; j < numbrA.length; j++) {
//             while (numbrA[j] == numbrA[i]) {
//                 numbrA.splice(j, 1);
//             }
//         }
//     } return numbrA;

// }
// console.log(NoRepeat([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,5,5,5,5,5,5]));