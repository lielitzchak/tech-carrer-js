import React from "react";
import "./css/Specifications.css";
import Specification from "./Specification";
class Specifications extends React.Component {
  render() {
    return (
      <section className="Specification">
        <Specification
          aboutFood="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit consectetur explicabo accusantium,"
          nameFood="Candies"
          imeg="https://did.li/pDxlC"
        />
        <Specification
          aboutFood="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit consectetur explicabo accusantium,"
          nameFood="Cake"
          imeg="https://did.li/GOZYH"
        />
        <Specification
          aboutFood="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit consectetur explicabo accusantium,"
          nameFood="Biscuit"
          imeg="https://did.li/vmmTY"
        />
        <Specification
          aboutFood="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit consectetur explicabo accusantium,"
          nameFood="Bread"
          imeg="https://did.li/vmmTY"
        />
        <Specification
          aboutFood="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit consectetur explicabo accusantium,"
          nameFood="Croissants"
          imeg="https://did.li/kUINf"
        />
        <Specification
          aboutFood="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit consectetur explicabo accusantium,"
          nameFood="Lollipop"
          imeg="https://did.li/B6arl"
        />
      </section>
    );
  }
}
export default Specifications;
