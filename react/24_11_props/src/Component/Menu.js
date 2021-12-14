import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <article>
        <h1>{this.props.typeFood}</h1>
        <p>{this.props.AboutFood}</p>
        <img src={this.props.imgFood} alt="img" />
      </article>
    );
  }
}
export default Menu;
