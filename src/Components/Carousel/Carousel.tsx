import { useState } from "react";
import "./Carousel.scss";
import { carouselState } from "../../App";

type CarouselProps = {
  obj: carouselState;
};

const Carousel = ({ obj }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const length = obj.carousel.length;

  return (
    <div className="Carousel">
      <div className="carousel-card">
        <button
          className="btn prev"
          onClick={() => {
            setIndex(index - 1 < 0 ? length - 1 : index - 1);
          }}
        >
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
        <button
          className="btn next"
          onClick={() => {
            setIndex(index + 1 >= length ? 0 : index + 1);
          }}
        >
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
