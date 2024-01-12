import React from 'react';

import Footer from '../components/header/footer/footer';
import {introdata} from '../Metadata'
import Componenty from '../smazat';
import MujNavbar from '../components/header/navbar/navbar';

function Portfolio() {
    return (
        
        <div>
             <MujNavbar></MujNavbar>
            <section id="section1">
                <h2>
                    <introdata className="title"></introdata>
                </h2>
                <Componenty></Componenty>
            </section>
            
            <Footer></Footer>
        </div>
    );
}
export default Portfolio;

