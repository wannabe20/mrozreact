import React from 'react';
import './styles.css';

const Componenty = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="navbar">
        <div className="font-bold text-xl">Portfolio</div>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Intro Section */}
      <div className="intro">
        <p>Meet Lukáš, the developer extraordinaire with a penchant for creativity and innovation.</p>
        <div className="social-links">
          <a href="#linkedin">LinkedIn</a>
          <a href="#github">GitHub</a>
          <a href="#twitter">Twitter</a>
          <a href="#medium">Medium</a>
        </div>
      </div>

      {/* Skills Showcase */}
      <div className="skills">
        <img src="https://file.rendit.io/n/vGOIExPKU7wlMO7j3SlZ.png" alt="dynamic background" />
        <div>
          <h2>Reimagining tech, one code at time.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="skill-item">C# Guru</div>
            <div className="skill-item">Java Master</div>
            <div className="skill-item">React</div>
            <div className="skill-item">Something</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Design Magician</div>
          </div>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <div className="portfolio">
        <img src="https://file.rendit.io/n/cr8jy267xtW4dpDewgN4.png" alt="gallery image" />
        <img src="https://file.rendit.io/n/cH3D9RT5uw2D9kcdI1R5.png" alt="gallery image" />
        <img src="https://file.rendit.io/n/XsnIKvWl2qoBmLzc1OAU.png" alt="gallery image" />
        <img src="https://file.rendit.io/n/Wp2PhH9GGALBTFmP4XDi.png" alt="gallery image" />
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2>Contact me!</h2>
        <form>
          <input type="email" placeholder="name@email.com" />
          <textarea placeholder="Type message here..."></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Componenty;
