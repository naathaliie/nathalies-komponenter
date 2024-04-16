import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import { myObj } from "./Components/Carousel/carouselTypes";

import Navbar from "./Components/Navbar/NavBar";

import Button from "./Components/Button/Button";
import { onClick } from "./Components/Button/ButtonOnClick";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Todo from "./Components/Todo/Todo";

const GoToNavLink = [
  { Text: "Home", href: "/#" },
  { Text: "About oss", href: "/#" },
  { Text: "Contakt oss", href: "/#" },
  { Text: "Different services", href: "/#" },
  { Text: "Cooperate with oss", href: "/#" },
];

const iconLeft = "🛸";
const iconRight = "🐝";

function App() {
  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      <Carousel obj={myObj} />
      <Button
        iconLeft={iconLeft}
        onClickFunction={onClick}
        btnName={"klicka mig"}
        iconRight={iconRight}
      />
      <Header />
      <Form />
      <Todo/>
    </>
  );
}

export default App;
