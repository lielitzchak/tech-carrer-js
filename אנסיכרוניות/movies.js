let movies = JSON.stringify({
  success: true,
  data: [
    {
      _id: "606d7d2c110a540674caa27a",
      movieName: "The Starling",
      rating: 3,
      date: "2021-04-07T09:36:44.053Z",
      __v: 0,
    },
    {
      _id: "607828bcd9def60015535fcc",
      movieName: "All the Bright Places",
      rating: 3,
      date: "2021-04-15T11:51:24.833Z",
      __v: 0,
    },
    {
      _id: "60815daa6b305d8dcd07c674",
      movieName: "Guilty",
      rating: 3,
      date: "2021-04-22T11:27:38.067Z",
      __v: 0,
    },
    {
      _id: "6122459bdbf6109484b6d2eb",
      movieName: "He's All That",
      rating: 4,
      date: "2021-08-22T12:39:55.115Z",
      __v: 0,
    },
    {
      _id: "612245fcbb593194fcda74d0",
      movieName: "The Forgotten Battle",
      rating: 3,
      date: "2021-08-22T12:41:32.969Z",
      __v: 0,
    },
  ],
});
function returnJs() {
  return new Promise((resolve, reject) => {
    JSON.parse(movies).success == true
      ? resolve(JSON.parse(movies))
      : reject("error");
  });
}

async function getReturnJs() {
  try {
    return await returnJs();
  } catch (error) {
    return error;
  }
}
getReturnJs()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {});




  
function jh() {
  return new Promise((resolve, reject) => {

    resolve(), reject();
  });
}
