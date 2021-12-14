import React from "react";

class Employee extends React.Component {
  render() {
    return (
      <section className="Employee">
        <img src={this.props.img} alt="Employee" />
        <h2>{this.props.EmployeeName}</h2>
        <p>{this.props.job}</p>
      </section>
    );
  }
}
export default Employee;
