// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Media from "./Component/Media";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <img src="https://did.li/SNZYH" alt="img" width="auto" height="auto" />
        <video
          src="https://did.li/1wOw5"
          muted
          autoPlay
          width="auto"
          height="auto"
        />
        <Media/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>first title in react</h1>
//       <p>this is a p element in my react application</p>
//       <img src="https://did.li/SNZYH" alt="img" width="auto" height="auto"/>
//       <video src="https://did.li/1wOw5" muted autoPlay loop width="auto" height="auto"/>
//     </div>
//   );
// }

export default App;
