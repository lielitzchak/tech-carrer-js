import React from "react";
import Employee from "./Employee";
import "./Employees.css";
class Employees extends React.Component {
  render() {
    return (
      <section className="Employees">
        <Employee
          job="Executive Chef"
          EmployeeName="Connor Quinn"
          img="https://did.li/0lmTY"
        />
        <Employee
          job="Restaurant Manager"
          EmployeeName="Samuel Schick"
          img="https://did.li/YTINf"
        />
        <Employee
          job="Co-Chief"
          EmployeeName="Fred Morrison"
          img="https://did.li/g6arl"
        />
        <Employee
          job="Co-Chief"
          EmployeeName="Celia Almeda"
          img="https://did.li/ammTY"
        />
      </section>
    );
  }
}
export default Employees;
