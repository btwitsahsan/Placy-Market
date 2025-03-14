import React from 'react'
import './HeroSection.css'
import heroSecImg from '../../assets/heroSection.png' 
import { FaCalendarAlt } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <>
    <section className="container heroSection">
    <div className="textSection">
        <h1>Find the <span>Perfect Space</span><br />to Grow Your Business!</h1>
        <p>Whether you're a marketplace owner looking to rent out your commercial space or a<br />vendor searching for the perfect location to sell your products, we’ve got you covered.</p>




        <div className="search-bar">
            <div className="search-input">
                <label>Location</label>
                <input type="text" placeholder="City or Area" />
            </div>
            <div className="search-input">
                <label>Price Range</label>
                <input type="text" placeholder='$100'/>
            </div>
            <div className="search-input">
                <label>Space Size</label>
                <div className="space-size">
                    <input type="text" placeholder='100 - 500 sq ft' />
                    <FaCalendarAlt className="calendar-icon" />
                </div>
            </div>
            <button className="btn search-button">Search</button>
        </div>



    </div>
    <div className="imageSection">
        <img src={heroSecImg} alt="Food Cart Illustration" />
    </div>
</section>
</>
  )
}

export default HeroSection