import React from "react";
import "./ListingSection.css";
import image1 from "../../assets/listImage1.png";
import image2 from "../../assets/listImage2.png";
import image3 from "../../assets/listImage3.png";
import featureImage1 from "../../assets/featureImage1.svg";
import featureImage2 from "../../assets/featureImage2.svg";
import featureImage3 from "../../assets/featureImage3.svg";

const listings = [
  {
    id: 1,
    image: image1,
    title: "Downtown Shopping Center, New York",
    price: "$500/Month",
    features: ["Fully Furnished", "300 Sq. Ft.", "Near Metro"],
  },
  {
    id: 2,
    image: image2,
    title: "Food Court Space, Los Angeles",
    price: "$800/Month",
    features: ["Fully Furnished", "300 Sq. Ft.", "Near Metro"],
  },
  {
    id: 3,
    image: image3,
    title: "Boutique Retail Space, Chicago",
    price: "$600/Month",
    features: ["Fully Furnished", "300 Sq. Ft.", "Near Metro"],
  },
];
const ListingSection = () => {
  return (
    <>
      <section className="container listingSection">
        <div className="section-header">
          <h2>Featured Marketplace Listings</h2>
          <p>
            Explore top marketplace listings with verified spaces, detailed
            descriptions, and flexible rental options to suit your business
            needs.
          </p>
        </div>
        <div className="list-items">
          {listings.map((listing) => (
            <>
              {" "}
              <div key={listing.id} className="listing-card">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="listing-image"
                />
                <div className="listing-info">
                  <div className="listing-title">
                    <h3>{listing.title}</h3>
                    <p className="price">{listing.price}</p>
                  </div>
                  <div className="features">
              <div><img src={featureImage1} alt="" /><span> Fully Furnished</span></div>
              <div><img src={featureImage2} alt="" /> <span>300 Sq. Ft.</span></div>
              <div><img src={featureImage3} alt="" /> <span>Near Metro</span></div>
            </div>
                </div>
                <button className="view-listing">View Listing</button>
              </div>
              <div className="separation-line"></div>
            </>
          ))}
        </div>
        <div className="listingBtn">
          <button className="btn">View More</button>
          </div>
      </section>
    </>
  );
};

export default ListingSection;
