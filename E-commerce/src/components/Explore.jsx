import React from 'react';
import './Explore.css';
import banner from "../assets/banner.png";
import cap from "../assets/cap.png";
import cup_bottle from "../assets/cup_bottle.png";
import t_shirt from "../assets/t_shirt.png";
import merch from "../assets/merch.png";

const Explore = () => {
  return (
    <div className='Products'>
      <div className="category">
        <div className="product">
          <img src={cap} alt="cap" />
          <p>Customized caps</p>
        </div>
        <div className="product">
          <img src={cup_bottle} alt="cup_bottle" />
          <p>Customized bottles</p>
        </div>
        <div className="product">
          <img src={t_shirt} alt="t_shirt" />
          <p>Customized tees</p>
        </div>
        <div className="product">
          <img src={merch} alt="merch" />
          <p>Our Merch</p>
        </div>
      </div>
      <div className="main">
        <div className="main-product">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
