import { Carousel } from 'bootstrap';
import React from 'react';
import NavScroll from '../components/header/navbar/navbar';
import Footer from '../components/header/footer/footer';
import {introdata} from '../Metadata'
import Component from '../smazat';

function Portfolio() {
    return (
        
        <div>
             <NavScroll></NavScroll>
            <section id="section1">
                <h2>
                    <introdata className="title"></introdata>
                </h2>
                <Component></Component>
            </section>
            
            <Footer></Footer>
        </div>
    );
}
export default Portfolio;

