import * as React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Carousel.css";

function CarouselImage() {
  return ( <Carousel >
    <Carousel.Item >
    <img className = "d-block w-100"
    src = "./images/Carousel1.jpg"
    alt = "First slide" />
    <Carousel.Caption >
    < h1 > To live a full life, you have to fill your stomach first. </h1> </Carousel.Caption> </Carousel.Item>

    <Carousel.Item >
    <img className = "d-block w-100"
    src = "./images/Carousel3.jpg"
    alt = "Second slide" />

    <Carousel.Caption >
    < h1 > Skinny people are easier to kidnap.Stay safe, eat cake. </h1>

    </Carousel.Caption> </Carousel.Item> </Carousel>
  );
}
export default CarouselImage;