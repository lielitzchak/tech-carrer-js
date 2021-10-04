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
