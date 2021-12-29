import React from "react";

class AddVegetables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      NameVegetable: "",
      arrayOf: [],
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.changInput = this.changInput.bind(this);
  }
  clickHandler() {
    this.state.arrayOf.push(this.state.NameVegetable);
    this.setState({ NameVegetable: this.state.NameVegetable });
  }
  changInput(event) {
    this.state.NameVegetable = event.target.value;
  }
  render() {
    return (
      <div>
        <h2>add vegetables</h2>
        <input onChange={this.changInput} />
        <button onClick={this.clickHandler}>click</button>
        <h1>{this.state.NameVegetable}</h1>
        <ul>
          {this.state.arrayOf.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default AddVegetables;
