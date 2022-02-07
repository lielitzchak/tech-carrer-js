import React, { useState } from "react";

export default function NewEmp() {
  let [fname, setFname] = useState("");
  let [lname, setlname] = useState("");
  let [list, setList] = useState([
    { firstName: "liel", lastName: "itzchak" },
    { firstName: "omer", lastName: "chekol" },
  ]);

  return (
    <div>
      <label>first name:</label>
      <input
        onChange={(e) => {
          setFname(e.target.value);
        }}
        value={fname}
      />
      <label>last name:</label>
      <input
        onChange={(e) => {
          setlname(e.target.value);
        }}
        value={lname}
      />
      <label>city:</label>
      <input />
      <label>gender:</label>
      <input />
      <label>pass:</label>
      <input type={"checkbox"} />
      <button>click</button>
      <table>
            <tr>
                <th> First name</th>
                <th>Last name</th>
                <th>year born</th>
                <th>city town</th>
                <th>passed training</th>
            </tr>
            {list.map(function (item) {
                return <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.born}</td>
                    <td>{item.city}</td>
                    <td>{item.training}</td>
                </tr>
            })}

        </table>

    </div>
  );
}
