import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import banner from "../../assets/banner.png"
import cap from "../../assets/cap.png"
import cup_bottle from "../../assets/cup_bottle.png"
import t_shirt from "../../assets/t_shirt.png"
import merch from"../../assets/merch.png"
import Explore from '../../components/Explore';
 
const Carousel = () => {
  // List of random image URLs (replace with actual URLs or image paths)
  const images = [
    banner, 
    t_shirt, 
    cap, 
    cup_bottle,
    merch
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <>
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    <Explore/>
    </>
  );
};

export default Carousel;
