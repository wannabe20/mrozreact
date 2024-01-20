import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="Footr" className="footer-container">
      <div className="ano">
        <div className="footerc">
          <a href="#" className="footer-item">Booking</a>
          <a href="#" className="footer-item">Schedule</a>
        </div>
        <div className="footerc">
          <a href="#" className="footer-item">Email</a>
        </div>
        <div className="footerc">
          <a href="#" className="footer-item">Setup</a>
          <a href="" className="footer-item">Contact</a>
        </div>
      </div>
      <div className="footer-image-container">
        <a href="https://www.instagram.com/prchlik20/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://file.rendit.io/n/mgI8uqqOq9DLKNOlkQUM.svg"
            alt="Instagram"
            className="footer-image"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://file.rendit.io/n/2fpEPAMJcG7bCW0sQAJ5.svg"
            alt="Facebook"
            className="footer-image"
          />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://file.rendit.io/n/Q3AfpY3fvibHj19BWsZ0.svg"
            alt="Twitter"
            className="footer-image"
          />
        </a>
      </div>
      <div className="footer-text">©2023 by Lukáš Prchlík</div>
      <div className="footer-divider"></div>
    </div>
  );
}
