import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-newsletter-container">
        <h1>Ionia</h1>
        <p>
          Get news letter update for upcoming product <br></br>and best discount
          for all items
        </p>
        <div className="footer-button-container">
          <input placeholder="Your Email" className="footer-email" />
          <button className="footer-submit-button">Submit</button>
        </div>
      </div>
      <div className="footer-information-container">
        <div className="footer-products">
          <h3>Products</h3>
          <p>Man</p>
          <p>Woman</p>
          <p>Kids</p>
        </div>
        <div className="footer-categories">
          <h3>Categories</h3>
          <p>Man</p>
          <p>Woman</p>
          <p>Kids</p>
          <p>Accessories</p>
          <p>Featured</p>
        </div>
        <div className="footer-social-medias">
          <h3 style={{ width: "100%" }}>Our Social Medias</h3>
          <FaFacebook size={24} />
          <FaInstagram size={24} />
          <FaYoutube size={24} />
          <FaTwitter size={24} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
