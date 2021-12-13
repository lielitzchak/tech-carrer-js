import React from "react";
import Manager from "./Manager";
import "./css/Managers.css"

class Managers extends React.Component {
  render() {
    return (
      <section className="Managers">
        <Manager ManagerName="Adrian Scold" ManagerImg="https://did.li/p6arl" ManagerJob="Financial Director" />
        <Manager ManagerName="Katty Nelson" ManagerImg="https://did.li/vOZYH" ManagerJob="Advertising Manager" />
        <Manager ManagerName="Jennie Clasrke" ManagerImg="https://did.li/eDxlC" ManagerJob="secretary" />
      </section>
    );
  }
}
export default Managers;
