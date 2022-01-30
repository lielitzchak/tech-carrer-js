import logo from "./logo.svg";
import "./App.css";
import Series, {
  AddSeason,
  EditSeason,
  Likes,
  Season,
} from "./components/Series";

function App() {
  return (
    <div className="App">
      <Series nameSeries="new girl" rating={8} year={2008} />
      <Likes />
      <Season />
      <AddSeason />
      <EditSeason
        nameSeries="new girl"
        ReleaseDate={"05-05-2021"}
        isFinish={false}
      />
    </div>
  );
}

export default App;
