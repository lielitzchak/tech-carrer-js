import React from "react";
import Food from "./Food";
class Foods extends React.Component {
  render() {
    return (
      <section className="Foods">
        <Food title="Pizza" para="hello world" imag="https://did.li/81INf" />
        <Food title="salad" para="hello world2" imag="https://did.li/ocbrl" />
        <Food title="dessert" para="hello world3" imag="https://did.li/Wy6Hw" />
      </section>
    );
  }
}
export default Foods;
