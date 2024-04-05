import { useState } from "react";
import "./Carousel.scss";
import { carouselState } from "../../App";
import img from "../../assets/img/hedgehog.jpg";

type CarouselProps = {
  obj: carouselState;
};

const Carousel = ({ obj }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const length = obj.carousel.length;

  /*Hantera klick på föregeånde.
    Skapar en ny variabel newIndex som är nuvarande index - 1.
    I setIndex kollar vi om newIndex är mindre än 0 ? length -1 : newindex; */
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  /* Hantera klick på nästa.
    Skapar en ny variabel newIndex som är nuvarande index + 1.
    I setIndex kollar vi om newIndex är större eller lika med length ? 0 : newIndex; */
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  console.log("bild? ", obj);
  return (
    <div className="Carousel">
      <div className="carousel-card">
        <button className="btn prev" onClick={handlePrevious}>
          {"<"}
        </button>
        <div className="carousel-item">
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
        <button className="btn next" onClick={handleNext}>
          {">"}
        </button>
      </div>
      <div id="page-viewer">
        <p id="page-info-text">{index + 1}</p>
      </div>
    </div>
  );
};

export default Carousel;
