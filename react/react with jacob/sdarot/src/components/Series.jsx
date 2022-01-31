import react, { createElement } from "react";
import React from "react";

export default class series extends react.Component {
  render() {
    let { nameSeries, rating, year } = this.props;

    return (
      <div>
        <h1>movie name:{nameSeries}</h1>
        <h1>rating:{rating}</h1>
        <h1>year:{year}</h1>
      </div>
    );
  }
}

export class Likes extends react.Component {
  constructor(props) {
    super(props);
    this.plusOneState = this.plusOneState.bind(this);
    this.Reset = this.Reset.bind(this);
    this.lassOne = this.lassOne.bind(this);
    this.state = { up: 0 };
  }
  plusOneState = () => {
    this.setState({ up: this.state.up + 1 });
  };
  Reset = () => {
    this.setState({ up: (this.state.up = 0) });
  };
  lassOne = () => {
    this.setState({ up: this.state.up - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.plusOneState}>plus one</button>
        <button onClick={this.Reset}>איפוס</button>
        <button onClick={this.lassOne}>lass One</button>
        <p>{this.state.up}</p>
      </div>
    );
  }
}

export class Season extends react.Component {
  constructor(props) {
    super(props);

    this.state = { NumberViews: 0 };

    this.upOne = this.upOne.bind(this);
    this.lass = this.lass.bind(this);
    this.Reset = this.Reset.bind(this);
  }
  upOne = () => {
    let test = this.state.NumberViews + 1;
    if (test != 26) {
      this.setState({ NumberViews: this.state.NumberViews + 1 });
    }
  };
  lass = () => {
    this.setState({ NumberViews: this.state.NumberViews - 1 });
  };
  Reset = () => {
    this.setState({ NumberViews: 0 });
  };
  generic = (event) => {
    console.log(this.state.NumberViews);
    this.setState({ NumberViews: event.target.value });
  };
  render() {
    return (
      <div>
        <button
          value={this.state.NumberViews + 1}
          onClick={(event) => this.generic(event)}
        >
          up 25
        </button>
        <button
          value={this.state.NumberViews - 1}
          onClick={(event) => this.generic(event)}
        >
          lass
        </button>
        <button value={0} onClick={(event) => this.generic(event)}>
          Reset
        </button>
        <p>{this.state.NumberViews}</p>
      </div>
    );
  }
}
export class AddSeason extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameSeason: "",
      numberSeason: 0,
      ReleaseDate: 0,
      isFinish: false,
    };
    this.showAll = this.showAll.bind(this);
  }
  changState = (event) => {
    this.state[event.name] = event.value;
  };
  showAll = () => {
    this.setState({ ...this.state });
  };
  render() {
    return (
      <div>
        <label>name</label>
        <br />
        <input
          onChange={(event) => this.changState(event.target)}
          name="nameSeason"
          type="text"
        />
        <br />
        <label>עונה</label>
        <br />
        <input
          onChange={(event) => this.changState(event.target)}
          name="numberSeason"
          type="number"
        />
        <br />
        <label>Release Date</label>
        <br />
        <input
          onChange={(event) => this.changState(event.target)}
          name="ReleaseDate"
          type="date"
        />
        <br />
        <label>finish?</label> <br />
        <input
          onChange={(event) => this.changState(event.target)}
          name="isFinish"
          type="checkbox"
        />
        <br />
        <button onClick={this.showAll}>click</button>
        <p>{this.state.nameSeason}</p>
        <p>{this.state.numberSeason}</p>
        <p>{this.state.ReleaseDate}</p>
        <p>{this.state.isFinish}</p>
      </div>
    );
  }
}

export class EditSeason extends react.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log(this.props.ReleaseDate);

    return (
      <div>
        <label>name</label>
        <input type="text" />
        <label>season</label>
        <input type="text" />
        <label>ReleaseDate</label>
        <input type="text" />
        <label>isFinish</label>
        <input type="text" />
      </div>
    );
  }
}
//;
// ReleaseDate;
// isFinish;
