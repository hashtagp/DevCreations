import React from 'react'
import './Products.css'
import clothes from '../assets/t_shirt.png'
import cap from '../assets/cap.png'
import bag from '../assets/bag.PNG'
import bottle from '../assets/bottle.png'
import mug from '../assets/mug.PNG'
import hoodie from '../assets/clothes 2.1.PNG'
import clothes3 from '../assets/clothes 3.png'
import nameBoard from '../assets/name board.png'
import explore_certificate from "../assets/explore_certificate.svg"


const Products = () => {
  return (
    <section class="products">
    <br/>
    <div class="product-grid">
        <div class="product">
            <img src={clothes} alt="Round Neck T-shirt"/>
            <p>Customized Round Neck T-shirts</p>
            <a>Rs. 200</a>
        </div>

        <div class="product">
            <img src={hoodie} alt="Hoddie"/>
            <p>Hoddie</p>
            <a>Rs. 500</a>
        </div>

        <div class="product">
            <img src={clothes3} alt="Full Arm Round Neck T-shirt"/>
            <p>Customized Full Arm Round Neck T-shirts</p>
            <a>Rs. 300</a>
        </div>

        <div class="product">
            <img src={cap} alt="Gray Cap"/>
            <p>Customized Gray Cap</p>
            <a>Rs. 300</a>
        </div>

        <div class="product">
            <img src={bottle} alt="Bottle"/>
            <p>Customized Water Bottle</p>
            <a>Rs. 700</a>
        </div>
        <div class="product">
            <img src={bag} alt="Bag"/>
            <p>Customized Hand Bag</p>
            <a>Rs. 300</a>
        </div>
        <div class="product">
            <img src={mug} alt="Mug"/>
            <p>Customized Mug</p>
            <a>Rs. 400</a>
        </div>
        <div class="product">
            <img src={nameBoard} alt="Name Board"/>
            <p>Customized Name Board</p>
            <a>Rs. 1000</a>
        </div>
        <div class="product">
            <img src={explore_certificate} alt="Certificate"/>
            <p>Customized Certificate</p>
            <a>Rs. 300</a>
        </div>

        </div>
</section>
  )
}

export default Products
