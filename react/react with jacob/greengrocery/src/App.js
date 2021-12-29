import "./App.css";
import Logo from "./Components/Logo/Logo.jsx";
import AddVegetables from "./Components/addVegetables/AddVegetables.jsx";
import Fruit from "./Components/Fruits/Fruit.jsx";
function App() {
  return (
    <div className="App">
      <Logo />
      <AddVegetables />
      <Fruit />
    </div>
  );
}
export default App;
