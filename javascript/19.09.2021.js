const arr_book = [];
function details_books(nameBook, writer, date) {
  return (Books = {
    nameBook,
    writer,
    date,
    inYear: () => {
      for (let i = 0; i < this.date.length; i++) {
        let d = new Date().getFullYear();
        if (this.date == d) {
          return true;
        }
        console.log(books);

        return false;
      }
      return books;
    },
  });
}
const books = details_books("harry pother", "j k rolling", "2006");
const books1 = details_books("some book", "j k rolling", "2006");
const books2 = details_books("3", "j k rolling", "2006");

// console.log(books);
arr_book.push(books, books1, books2);
// console.log(arr_book);

function add_car(model, years, price, tests, one, two, inYear) {
  return (oneCar = { model, years, price, tests: (tests = [one, two]) });
}
const cars = [];

let addToCars = add_car("mazda1", 2021, "3", "4", 2021, 2016);
let addToCars1 = add_car("mazda2", 2010, "71", "91", 2010, 2021);
let addToCars2 = add_car("mazda3", 2021, "71", "87", 2015, 2020);
cars.push(addToCars, addToCars1, addToCars2);
// const myArray = [];

// function details_books(nameBook, writer, date) {
//   return (book1 = {
//     nameBook,
//     writer,
//     date,
//   });
// }
// const books = details_books("harry pother", "j k rolling", "2006");
// const books1 = details_books("some book", "j k rolling", "2006");
// const books2 = details_books("3", "j k rolling", "2006");

// console.log(books);
// arr_book.push(books, books1, books2);
// console.log(arr_book);
const my_cars = [];

function add_car(model, years, price, tests, one, two) {
  return (oneCar = {
    model,
    years,
    price,
    tests: (tests = [one, two]),
    isInYear: function () {
      for (let i = 0; i < this.tests.length; i++) {
        const d = new Date().getFullYear();
        if (this.tests[i] == d) return true;
      }
      return false;
    },
  });
}
console.log();
const addToCars1 = add_car("mazda1", 2021, 252256, 2020, 2021, 2016);
const addToCars2 = add_car("mazda2", 2010, 252256, 2020, 2010, 2021);
const addToCars3 = add_car("mazda3", 2021, 252256, 2010, 2015, 2020);
my_cars.push(addToCars1, addToCars2, addToCars3);
console.log(my_cars);
