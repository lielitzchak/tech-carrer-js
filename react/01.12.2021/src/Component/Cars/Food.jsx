import React from "react";
class Food extends React.Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.para}</p>
        <img src={this.props.imag} alt="img" />
      </article>
    );
  }
}
export default Food;
