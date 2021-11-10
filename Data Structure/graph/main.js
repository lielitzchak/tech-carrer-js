//! throw Error =to learn that ;
class Graph {
  constructor() {
    this.contactWith = {};
  }
  addNewVertex(key) {
    if (!this.contactWith[key]) {
      this.contactWith[key] = [];
    } else {
      console.log("error");
    }
  }

  connectVertex(vertex1, vertex2) {
    let checkIfExist = this.contactWith[vertex1] && this.contactWith[vertex2];
    if (this.contactWith[vertex1]) {
      this.contactWith[vertex1].push(vertex2);
      this.contactWith[vertex2].push(vertex1);
    }
  }
  remove(vertex1) {
    delete this.contactWith[vertex1];
  }
}

let x = new Graph();
x.addNewVertex("a");
x.addNewVertex("b");
x.addNewVertex("c");
x.connectVertex("a", "b");
// x.remove("a");
console.log(x.contactWith);
