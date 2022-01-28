import React from "react";
import "./css/Specifications.css";

class Specification extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.imeg} alt="img" />
        <h1>{this.props.nameFood}</h1>
        <p>{this.props.aboutFood}</p>
      </article>
    );
  }
}
export default Specification;
 