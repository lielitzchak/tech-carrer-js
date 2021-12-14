import { Component } from "react";
export default class Something extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
    };
    this.changTo = this.changTo.bind(this);
    this.lastNameFun = this.lastNameFun.bind(this);
    this.changeAge = this.changeAge.bind(this);
  }
  changTo(event) {
    const theDifr = event.target.value;
    this.setState({ firstName: theDifr });
  }
  lastNameFun(event) {
    const theDifr = event.target.value;
    this.setState({ lastName: theDifr });
  }
  changeAge(event) {
    const thedif = event.target.value;
    this.setState({ age: thedif });
  }
  render() {
    return (
      <div>
        <section>
          <h2>first name:</h2>
          <input onChange={this.changTo} />
          <h1>{this.state.firstName}</h1>
        </section>
        <br />
        <section>
          <h2>last name:</h2>
          <input onChange={this.lastNameFun} />
          <h1>{this.state.lastName}</h1>
        </section>
        <section>
          <h1>age</h1>
          <input onChange={this.changeAge} />
          <h1></h1>
        </section>
      </div>
    );
  }
}
