import { useState } from "react";
import "./Carousel.scss";
import { CarouselState } from "./carouselTypes";
import { FiChevronsLeft } from "react-icons/fi"; // ikon från react-icons
import { FiChevronsRight } from "react-icons/fi";

type CarouselProps = {
  obj: CarouselState;
};

const Carousel = ({ obj }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const length = obj.carousel.length;
  const [animationDirection, setAnimationDirection] = useState<string>("");

  const handlePreviousClick = () => {
    setIndex(index - 1 < 0 ? length - 1 : index - 1);

    // Sätt klassen till null för att tvinga en uppdatering
    setAnimationDirection(animationDirection ? "" : "clickedLeft");

    // Efter en kort fördröjning, sätt klassen tillbaka till önskat värde.
    setTimeout(() => {
      setAnimationDirection("clickedLeft");
    }, 1); // x millisekunders fördröjning, justera vid behov
  };

  const handleNextClick = () => {
    setIndex(index + 1 >= length ? 0 : index + 1);
    setAnimationDirection(animationDirection ? "" : "clickedRight");

    // Efter en kort fördröjning, sätt klassen tillbaka till önskat värde.
    setTimeout(() => {
      setAnimationDirection("clickedRight");
    }, 1); // x millisekunders fördröjning, justera vid behov
  };

  return (
    <div className="Carousel">
      <div className="carousel-card">
        <button className="btn prev" onClick={handlePreviousClick}>
          <FiChevronsLeft className="chevron-icon-left" />
        </button>
        <div className={`carousel-item ${animationDirection}`}>
          {obj.carousel.map((element, i) => {
            return (
              index === i && (
                <div key={element.id} className={`item ${i + 1}`}>
                  {element.img && (
                    <img className="carousel-img" src={element.img} alt="img" />
                  )}
                  <h1 className="item-title">{element.title}</h1>
                  <p>{element.info}</p>
                </div>
              )
            );
          })}
        </div>
        <button className="btn next" onClick={handleNextClick}>
          <FiChevronsRight className="chevron-icon-right" />
        </button>
      </div>
      <div id="page-viewer">
        <p id="page-info-text">{index + 1}</p>
      </div>
    </div>
  );
};

export default Carousel;
