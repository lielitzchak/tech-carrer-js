// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   addNodeAtLast(data) {
//     let NewNode = new Node(data);
//     if (this.head == null) {
//       this.head = NewNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = NewNode;
//       this.tail = NewNode;
//     }
//     this.length++;
//     return this;
//   }
//   addNodeAtHead(data) {
//     let newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   removeFromHead() {}
// }

// let list = new LinkedList();
// list.addNodeAtLast("נכנס ראשון");
// list.addNodeAtLast("נכנס שני");
// list.addNodeAtLast("נכנס שלישי");
// ! המידע שמכיל את הnext:null הוא האובייקט האחרון שנכנס
// list.addNodeAtHead("נכנס ראשון");
// list.addNodeAtHead("נכנס שני");
// list.addNodeAtHead("נכנס שלישי");
// console.log(list);

// ! part two
class Node {
  constructor(data) {
    this.crs = data;
    console.log();
    this.next = null;
  }
}
class LinkedList {
  constructor(data) {
    this.crs = null;
    this.next = null;
  }
  addCrs(data) {
    let newNode = new Node(data);
    if (!data) {
      this.data = newNode;
      this.tail = newNode;
    }
  }
}
let toLog = new LinkedList("hello");
console.log(toLog);
