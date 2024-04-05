export type OneCarousel = {
    id: string;
    title: string;
    info: string;
    img: string | null;
  };
  
  export type CarouselState = {
    carousel: OneCarousel[];
  };