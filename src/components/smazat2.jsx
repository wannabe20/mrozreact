import React from 'react';
import './styles.css';
import Skills from './skills/skills';
import ContactForm from './header/contact/contact';

const Nechaou = () => {
  return (
    <div>
      {/* Intro Section */}
      <div id="about" className="intro">
  <div className="background-image"></div>
  <p>Meet Lukáš Prchlík, the developer extraordinaire with a passion for creativity and innovation.</p>
  <div className="social-links">
    <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">Facebook</a>
    <a href="https://github.com/wannabe20" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://twitter.com" target='_blank' rel="noopener noreferrer">Twitter</a>
  </div>
</div>

      {/* Skills Showcase */}
      <Skills></Skills>

      {/* Portfolio Gallery */}
      <div id="projects" className="portfolio">
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