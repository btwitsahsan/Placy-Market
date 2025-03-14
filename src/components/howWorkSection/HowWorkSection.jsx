import React from "react";
import "./HowWorkSection.css";
import step1Image from "../../assets/step1Image.png";
import step2Image from "../../assets/step2Image.png";
import step3Image from "../../assets/step3Image.png";
import workSecImg from "../../assets/workSecImg.png";
const HowWorkSection = () => {
  return (
    <section className="workSection">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>
            Sign up as a marketplace owner or vendor, browse available spaces,
            and send a rental request. Once approved, connect with the owner to
            finalize the deal.
          </p>
        </div>

        <div className="steps-section">
          <div className="steps-container">
            <div className="step-card active">
              <h2>1</h2>
              <img src={step1Image} alt="Browse Available Spaces" />
              <h3>Browse Available Spaces</h3>
              <p>Search By Location, Price, And Size.</p>
            </div>

            <div className="step-card">
              <h2>2</h2>
              <img src={step2Image} alt="Send a Rental Request" />
              <h3>Send a Rental Request</h3>
              <p>Contact Marketplace Owners With Your Details.</p>
            </div>

            <div className="step-card">
              <h2>3</h2>
              <img src={step3Image} alt="Start Selling!" />
              <h3>Start Selling!</h3>
              <p>Get Approved And Move In To Start Your Business.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="workSectionImg">
        <img src={workSecImg} alt="img" />
      </div>
    </section>
  );
};

export default HowWorkSection;
