import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <h1>name: {this.props.name}</h1>
        <h1>age: {this.props.age}</h1>
      </div>
    );
  }
}
export default Person;
