import React from "react";
import "./Footer.css"; 

export default function Footer() {
  return (
    <div id="Footr" className="footer-container">
      <div className="ano">
        <div className="footerc">
          <a href="#" className="footer-item">Projects</a>
          <a href="#" className="footer-item">Booking</a>
          <a href="#" className="footer-item">Management</a>
        </div>
        <div className="footerc">
          <a href="#" className="footer-item">Contact</a>
          <a href="#" className="footer-item">Email</a>
        </div>
        <div className="footerc">
          <a href="#" className="footer-item">Tech</a>
          <a href="#" className="footer-item">Docs</a>
          <a href="#" className="footer-item">Blog</a>
        </div>
      </div>
      <div className="footer-image-container">
        <img
          src="https://file.rendit.io/n/Q3AfpY3fvibHj19BWsZ0.svg"
          alt="Image1"
          className="footer-image"
        />
        <img
          src="https://file.rendit.io/n/mgI8uqqOq9DLKNOlkQUM.svg"
          alt="Image2"
          className="footer-image"
        />
        <img
          src="https://file.rendit.io/n/2fpEPAMJcG7bCW0sQAJ5.svg"
          alt="Image3"
          className="footer-image"
        />
        <img
          src="https://file.rendit.io/n/GqYEP9OWA6NjZkWuUQ8Q.svg"
          alt="Image4"
          className="footer-image"
        />
      </div>
      <div className="footer-text">©2023 by Lukáš Prchlík</div>
      <div className="footer-divider"></div>
    </div>
  );
}
