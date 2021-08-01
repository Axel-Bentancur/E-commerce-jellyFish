import React from "react";
import { Carousel } from "react-bootstrap";
import "./styles.css";
import img1 from "../../assets/Carousel-img/img-1.jpg";
import img2 from "../../assets/Carousel-img/img-2.jpg";

export default function CarouselLayout() {
  return (
    <Carousel indicators="false">
      <Carousel.Item>
        <img className="d-block imagen" src={img1} alt="First slide" />
        <Carousel.Caption className="carousel-text">
          <h3>Has just arrived!</h3>
          <h2>Huge Summer Collection</h2>
          <p>Swimwear, Tops, Shorts, Sunglasses & much more...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block imagen" src={img2} alt="Second slide" />
        <Carousel.Caption className="carousel-text">
          <h3>Complete your look with</h3>
          <h2>New Women's Accessories</h2>
          <p>Hats & Caps, Sunglasses, Bags & much more...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
