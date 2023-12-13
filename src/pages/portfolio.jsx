import { Carousel } from 'bootstrap';
import React from 'react';
import NavScroll from '../components/header/navbar/navbar';
import Footer from '../components/header/footer/footer';
import {introdata} from '../Metadata'

function Portfolio() {
    return (
        
        <div>
             <NavScroll></NavScroll>
            <section id="section1">
                <h2>
                    <introdata className="title"></introdata>
                </h2>
                
            </section>
            <section id="section2">
                <h2>Sekce 2</h2>
                
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                
            </section>
            <Footer></Footer>
        </div>
    );
}
export default Portfolio;

