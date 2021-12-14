import React from "react";
class Manager extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.ManagerImg} alt="img" />
        <h2>{this.props.ManagerName}</h2>
        <p>{this.props.ManagerJob}</p>
      </article>
    );
  }
}
export default Manager;
