import react from "react";

export default class Timers extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      second: 0,
      text: " ",
    };

    this.secondUp = this.secondUp.bind(this);
    this.secondLass = this.secondLass.bind(this);
    this.reset = this.reset.bind(this);
    this.stamFunction = this.stamFunction.bind(this);
  }
  secondUp() {
    const nextSecond = this.state.second + 1;
    this.setState({ second: nextSecond });
  }
  secondLass() {
    const next = this.state.second - 1;
    this.setState({ second: next });
  }
  reset() {
    const toReset = (this.state.second = 0);
    this.setState({ second: toReset });
  }
  stamFunction(event) {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <div>
        <h1>{this.state.second}</h1>
        <input value={this.state.text} onChange={this.stamFunction} />
        <button onClick={this.secondUp}>click add 1</button>
        <button onClick={this.secondLass}>click</button>
        <button onClick={this.reset}>rest</button>
      </div>
    );
  }
}
