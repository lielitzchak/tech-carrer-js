import { Component } from "react";
export default class Fruit extends Component {
  constructor(props) {
    super(props);

    this.state = { fruit: "" };
  }
  render() {
    return (
      <section>
        <h1>Fruit</h1>
        <input />
        <button>click</button>
        <h1>{this.state.fruit}</h1>
      </section>
    );
  }
}
