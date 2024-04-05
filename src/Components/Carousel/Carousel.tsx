import { useState } from "react";
import "./Carousel.scss";
import { carouselState } from "../../App";

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
  console.log("obj ger: ", obj);
  console.log("Index är nu: ", index);
  console.log("length är nu: ", length);

  return (
    <div className="carousel">
      <button onClick={handlePrevious}>Föregående</button>
      {obj.carousel.map((element, i) => {
        return (
          index === i && (
            <div key={element.id} className={`item ${i + 1}`}>
              {element.title}
            </div>
          )
        );
      })}

      <button onClick={handleNext}>Nästa</button>
      <p>{index + 1}</p>
    </div>
  );
};

export default Carousel;
