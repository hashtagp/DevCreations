import React from 'react'
import './Navbar.css'
import devLogo2 from "../assets/DEV LOGO-2.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
    
            <div className="logo">
                <a href="#">
                <img src={devLogo2} alt="Dev Creations Logo"/>
                </a>
            </div>

            <div className="one py-25">
                <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search products..."/>
                <button type="submit">Search</button>
            </div>

            <div className="nav-icons">
                <a href="#" className="icon cart">🛒</a>
                <a href="#" className="icon profile">👤</a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
