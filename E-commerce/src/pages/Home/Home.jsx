import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import banner from "../../assets/banner.png"
import cap from "../../assets/cap.png"
import cup_bottle from "../../assets/cup_bottle.png"
import t_shirt from "../../assets/t_shirt.png"
import merch from"../../assets/merch.png"
import Explore from '../../components/Explore';
import om from "../../assets/om.svg"
import badge from "../../assets/badge.png"
import Women_banner from "../../assets/Women_banner.svg"
import explore_tWoman from "../../assets/explore_tWoman.svg"
import explore_badge from "../../assets/explore_badge.svg"
import explore_letterhead from "../../assets/explore_letterhead.svg"
import explore_banner from "../../assets/explore_banner.svg"
import explore_calender from "../../assets/explore_calender.svg"
import explore_certificate from "../../assets/explore_certificate.svg"
import man_laptop from "../../assets/man_laptop.svg"
 
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
    <marquee behavior="alternate" direction="left">
            <span class="star">★</span>BADGES
            <span class="star">★</span>CERTIFICATES
            <span class="star">★</span>DANGLERS
            <span class="star">★</span>LETTERHEADS
            <span class="star">★</span>TABLE CALENDERS
            <span class="star">★</span>T SHIRT
            <span class="star">★</span>BANNERS
    </marquee>
    <Explore/>
    <div className="home-container">
      <div className='wardrobe'>
        <div className='wardrobe-img'>
          <img src={om} alt="om" />
        </div>
        <div className='wardrobe-text'>
          <h1>Upgrade Your Wardrobe with Our Exclusive</h1>
          <h1>T-Shirts.</h1>
          <p>Customize Explore and Shop Now!</p>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className='badge'>
        <h1>Your Design,</h1>
        <h1>Your Badge</h1>
        <h1>PERSONALIZE IT!</h1>
        <button>EXPLORE</button>
        <img src={badge} alt="" />
      </div>
    </div>
    <div className="banner">
        <span className='text'>
          <h1>DEV CREATIONS</h1>
          <hr/>
          <h4>A N D   S O L U T I O N S</h4>
          <p>YOUR VISION IS OUR  CREATIONS</p>
          <p>Creative branding solutions for businesses, delivering everything needed to make a lasting impression.</p>
        </span>
        <img src={Women_banner} alt="" />
      </div>
      <div className="explore">
        <h1>Explore Our Collection</h1>
        <hr />
        <h4>Browse through our products</h4>
        <div className="explore-container">
          <div className="explore-card">
          <h3>T-Shirts</h3>
            <img src={explore_tWoman} alt="" />
          </div>
          <div className="explore-card">
          <h3>Badges</h3>
            <img src={explore_badge} alt="" /> 
          </div>
          <div className="explore-card">
          <h3>Letterheads</h3>
            <img src={explore_letterhead} alt="" /> 
          </div>
          <div className="explore-card">
          <h3>Banners</h3>
            <img src={explore_banner} alt="" /> 
          </div>
          <div className="explore-card">
          <h3>Calenders</h3>
            <img src={explore_calender} alt="" /> 
          </div>
          <div className="explore-card">
          <h3>Certificates</h3>
            <img src={explore_certificate} alt="" /> 
          </div>
        </div>
        <button>EXPLORE MORE</button>
      </div>
      <div className="promo">
        <span className="promo-text">
          <h1>Unlock your creativity with our professional courses</h1>
          <p>Unlock your potential with expertly designed courses at Dev Creations. Master Graphic Design, 3D Animation, or Audio-Video Editing using industry-standard tools like Photoshop, Maya, and Premiere Pro. Turn creativity into career-ready skills with guidance from professionals!</p>
          <button>EXPLORE</button>
        </span>
        <span className="promo-img">
          <img src={man_laptop} alt="" />
        </span>
      </div>
    </>
  );
};

export default Carousel;
