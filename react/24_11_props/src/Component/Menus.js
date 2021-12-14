import React from "react";
import Menu from "./Menu";
import "./css/Menu.css";
class Menus extends React.Component {
  render() {
    return (
      <section className="Menus">
        <Menu
          typeFood="pizza"
          AboutFood="consecrator autre, tempera nebule minima languid solutes Durius Quasi venins this . betake exception id official consenter aspersion's.  Quasi, nunquam quo!"
          imgFood="https://did.li/1aUfT"
        />
        <Menu
          typeFood="salads"
          AboutFood="consecrator autre, tempera nebule minima languid solutes Durius Quasi venins this . betake exception id official consenter aspersion's.  Quasi, nunquam quo!"
          imgFood="https://did.li/7TINf"
        />
        <Menu
          typeFood="desserts"
          AboutFood="consecrator autre, tempera nebule minima languid solutes Durius Quasi venins this . betake exception id official consenter aspersion's.  Quasi, nunquam quo!"
          imgFood="https://did.li/n6arl"
        />
      </section>
    );
  }
}
export default Menus;
