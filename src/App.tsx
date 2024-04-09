import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import uuid from "react-uuid";
import { CarouselState, myObj } from "./types";

import Navbar from "./Components/Navbar/NavBar";

import Button from "./Components/Button/Button";
import { onClick } from "./Components/Button/ButtonOnClick";

const GoToNavLink = [
  { Text: "Home", href: "/#" },
  { Text: "About oss", href: "/#" },
  { Text: "Contakt oss", href: "/#" },
  { Text: "Different services", href: "/#" },
  { Text: "Cooperate with oss", href: "/#" },
];

function App() {
  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      <Carousel obj={myObj} />
      <Button
        onClickFunction={onClick}
        btnName={"klicka mig"}
        iconRight={"🐝"}
      />
    </>
  );
}

export default App;
