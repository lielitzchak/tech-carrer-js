let b = [2, 7, 8, 5, 4];
let x = ["d", "e", "J", "y", "T", "w", "v"];
console.log(b);
console.log(x);

function switchOnArrays(theArray, Sign) {
  switch (Sign) {
    case "S":
      return theArray.sort();
    case "R":
      return theArray.reverse();
    case "T":
      return theArray.toString();
    case "J":
      return theArray.join("&");
    case "":
      return theArray.sort((a, b) => {
        return a - b;
      });
    default:
      break;
  }
}
console.log(switchOnArrays(x, "J"));
console.log(switchOnArrays(b, "R"));

//!

// exeresie 1

// exeresie 4
// צרו פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש,
// כאשר כל מספר שהוא זוגי מתחלף במילה "even".
// בצעו פעמיים.
const NUMBERS = [1, 4, 7, 8, 5, 2, 9, 6, 3];
function DoubleChangerInEven(theArrays) {
  const TEMP = [];
  for (let i = 0; i < theArrays.length; i++) {
    if (theArrays[i] % 2 == 0) {
      theArrays[i].join("even");
    } else {
      theArrays;
    }
  }
}
console.log(DoubleChangerInEven(NUMBERS));
