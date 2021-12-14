import React from "react";

class Details extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.img} alt="img" width="auto" height="auto" />
        <video
          src={this.props.video}
          muted
          autoPlay
          width="auto"
          height="auto"
        />
      </div>
    );
  }
}
export default Details;
