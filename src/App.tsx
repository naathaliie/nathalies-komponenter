import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import uuid from "react-uuid";

type oneCarousel = {
  id: string;
  title: string;
  info: string;
};

export type carouselState = {
  carousel: oneCarousel[];
};

const myObj: carouselState = {
  carousel: [
    {
      id: uuid(),
      title: "Första",
      info: "Detta är den första",
    },
    {
      id: uuid(),
      title: "Andra",
      info: "Detta är den andra",
    },
    {
      id: uuid(),
      title: "Tredje",
      info: "Detta är den tredje",
    },
    {
      id: uuid(),
      title: "Fjärde",
      info: "Detta är den fjärde",
    },
    {
      id: uuid(),
      title: "Femte",
      info: "Detta är den femte",
    },
  ],
};

function App() {
  return (
    <div id="app">
      <Carousel obj={myObj} />
    </div>
  );
}

export default App;
