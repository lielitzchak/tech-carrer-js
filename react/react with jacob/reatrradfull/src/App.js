import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserCard from "./components/User-Card/User-Card";

function App() {
 
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="content">
          <UserCard className="topazCard" firstName="topaz" lastName="levi" age="21" />
          <div className="flap"></div>
        </div>
      </div>
      
     <UserCard firstName="shilat" lastName="itzchak" age="16" />
      <UserCard firstName="avi" lastName="chekol" age="32" />
      <UserCard firstName="mazal" lastName="fatana" age="30" />
      <UserCard firstName="liel" lastName="itzchak" age="21" />  
      <Footer />
    </div>
  );
}

export default App;
