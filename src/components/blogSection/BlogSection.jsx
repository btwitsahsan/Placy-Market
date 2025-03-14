import React from "react";
import "./BlogSection.css";
import blogImage from "../../assets/blogImage.png";
import blogImage1 from "../../assets/blogImage1.png";
import blogImage2 from "../../assets/blogImage2.png";
import blogImage3 from "../../assets/blogImage3.png";
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Maximizing Sales in a Shared Marketplace",
      description:
        "Proven Strategies To Attract More Customers And Boost Revenue ..",
      date: "August 22, 2025",
      image: blogImage1,
    },
    {
      id: 2,
      title: "Essential Legal Tips for Renting a Commercial Space",
      description:
        "Understanding Contracts, Lease Terms, And Tenant Rights ...",
      date: "August 22, 2025",
      image: blogImage2,
    },
    {
      id: 3,
      title: "The Future of Marketplace Rentals: Trends to Watch",
      description:
        "Emerging Industry Trends And How They Impact Vendors And Owners...",
      date: "August 22, 2025",
      image: blogImage3,
    },
  ];

  return (
    <div className="container blogSection">
      <div className="section-header">
        <h2>Articles And Blogs</h2>
        <p>
          Stay informed with expert articles and blogs on marketplace trends,
          rental tips, and business growth strategies.
        </p>
      </div>
      <div className="blogs">
        <div className="main-blog">
          <img src={blogImage} alt="Main Blog" className="main-blog-image" />
          <div className="main-blog-content">
            <h2>The Future of Marketplace Rentals: Trends to Watch</h2>
            <span>August 22, 2025</span>  
          </div>
          <p>
            Stay Ahead With The Latest Marketplace Trends, From Digital
            Transformation To Flexible Rental Models, Helping Vendors And Owners
            Adapt And Grow Their Businesses.
          </p>
        </div>

        <div className="other-blogs">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <span>{blog.date}</span>
              </div>
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-item-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
