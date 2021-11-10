//! throw Error =to learn that ;
class Graph {
  constructor() {
    this.contactWith = {};
  }
  addNewVertex(key, data) {
    if (!this.contactWith[key]) {
      this.contactWith[key] = [data];
    } else {
      console.log("error");
    }
  }
  connectVertex(vertex1, vertex2) {
    if (this.contactWith[vertex1]) {
      console.log((this.contactWith[vertex1] = [{ friend: { vertex2 } }]));
      console.log((this.contactWith[vertex2] = [{ friend: { vertex1 } }]));
    }
    console.log(vertex1, vertex2);
  }
}

let x = new Graph();
x.addNewVertex("a", { name: "liel", age: 21 });
x.addNewVertex("b", { name: "omer", age: 23 });
x.connectVertex("a", "b");
console.log(x.contactWith);
