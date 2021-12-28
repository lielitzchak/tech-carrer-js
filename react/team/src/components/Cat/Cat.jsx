import React, { useState, useEffect } from "react";

export default function Cat() {
  const [cat, setCat] = useState({});
  let handelInput = (event) => {
    cat[event.target.name] = event.target.value;
  };
  let saveClick = () => {
    setCat({ ...cat });
  };
  useEffect(() => {
    alert("hello");
  }, [cat]);

  return (
    <div>
      name
      <input name="fullName" onChange={handelInput} />
      age
      <input name="age" onChange={handelInput} />
      color
      <input name="color" onChange={handelInput} />
      gender
      <input name="gender" onChange={handelInput} />
      <button onClick={saveClick}>click</button>
    </div>
  );
}
