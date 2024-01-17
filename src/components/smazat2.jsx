import React from 'react';
import './styles.css';
import ContactForm from './header/contact/contact';



const Nechaou = () => {
  return (
    <div>
      {/* Intro Section */}
      <div id="about" className="intro">
        <p>Meet Lukáš, the developer extraordinaire with a penchant for creativity and innovation.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target='_blank'>Facebook</a>
          <a href="https://github.com/wannabe20" target="_blank">GitHub</a>
          <a href="https://twitter.com" target='_blank'>Twitter</a>
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

        <ContactForm></ContactForm>
    </div>
  );
};

export default Nechaou;
