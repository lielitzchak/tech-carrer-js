const students = [
  {
    first: "someone",
    phone: "0547080093",
    mail: "liel.izcha1@gmail.com",
  },
  {
    first: "daniel",
    phone: "0541529652",
    mail: "liel.izcha2@gmail.com",
  },
  {
    first: "liel",
    phone: "0541234567",
    mail: "liel.izcha3@gmail.com",
  },
];

// console.log(students);
for (let index = 0; index < students.length; index++) {
  // console.log(students[index].first);
  // console.log(students[index].phone);
  // console.log(students[index].mail);
}
const itemForSale = [
  {
    name: "phone",
    price: "450$",
    img: ["https://did.li/xQSfT", "https://did.li/DzHNf"],
  },
  {
    name: "nhb",
    price: "62$",
    img: ["https://did.li/O2kTY", "https://did.li/hFqCN"],
  },
  {
    name: "hbgvfcxcvgbh",
    price: "525$",
    img: ["https://did.li/6cNw5", "https://did.li/yQSfT"],
  },
  {
    name: "hgfcxc",
    price: "5412$",
    img: ["https://did.li/mofaa", "https://did.li/7cNw5"],
  },
  {
    name: "mnhgbvfc",
    price: "6523$",
    img: ["https://did.li/DzHNf", "https://did.li/nofaa"],
  },
];
// console.log(itemForSale[0]);
for (let i = 0; i < itemForSale.length; i++) {
  const itemForSaleImg = itemForSale[i].img;
  for (let j = 0; j < itemForSaleImg.length; j++) {
    console.log( itemForSaleImg[j]);
  }
}
