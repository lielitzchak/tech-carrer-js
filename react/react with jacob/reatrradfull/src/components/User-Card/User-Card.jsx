import React from "react";
import "./User-Card.css";

export default function UserCard(props) {
  return (
    <div className="container center">
      <div className="card">
        <h1>first name</h1>
        <h3>{props.firstName}</h3>
        <h1>last name</h1>
        <h3>{props.lastName}</h3>
        <h1>age</h1>
        <h3>{props.age}</h3>
      </div>
    </div>
  );
}
