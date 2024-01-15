import React, { Component } from 'react'
import './Navbarbet_styles.css';

const MujNavbar = () => {
  return (
  <div className="navbar">
    <div className="font-bold text-xl">Portfolio</div>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      
    </div>
  </div>
  );
};

export default MujNavbar;
