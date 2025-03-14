import React from 'react'
import './AboutUs.css'
import aboutSecImg from '../../assets/aboutSection.png'

const AboutUs = () => {
  return (
    <>
         <section className="container aboutSection">
            <div className="imageContainer">
                <img src={aboutSecImg} alt="About Us" />
            </div>
            <div className="textContainer">
                <h2>About Us</h2>
                <p>
                The Placy Market is designed to seamlessly connect marketplace owners, vendors, and franchise investors. Whether you're looking to rent out a commercial space, find the perfect location for your business, or invest in a franchise, our platform makes the process smooth and efficient. 
                <br/><br/>We prioritize secure communication and privacy, allowing direct interactions only when a rental request is confirmed.Fully responsive on all devices, our platform is built to help businesses thrive in the most convenient and efficient way possible.
                </p>
            </div>
        </section>
    </>
  )
}

export default AboutUs