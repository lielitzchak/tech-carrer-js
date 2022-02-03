import React from "react";
import "./App.css";
import Employees from "./Component/Employees";
import Menus from "./Component/Menus";
import Managers from "./Component/Managers";
import Specifications from "./Component/Specifications";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Specifications />
        <Employees />
        <Menus />
        <Managers />
      </div>
    );
  }
}

export default App;
