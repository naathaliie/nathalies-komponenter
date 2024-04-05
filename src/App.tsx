import "./App.css";
import Carousel from "./Components/Carousel/Carousel";

const minArray: string[] = ["första", "andra", "tredje"];

function App() {
  return (
    <div id="app">
      <Carousel array={minArray} />
    </div>
  );
}

export default App;
