import React from 'react';
import Footer from '../components/header/footer/footer';
import {introdata} from '../Metadata'
import MujNavbar from '../components/header/navbar/NAVBARBETTER';
import Nechaou from '../components/smazat2';

function Portfolio() {
    return (
        
        <div>
             <MujNavbar></MujNavbar>
            <section id="section1">
                <h2>
                    <introdata className="title"></introdata>
                </h2>
                <Nechaou></Nechaou>
            </section>
            
            <Footer></Footer>
        </div>
    );
}
export default Portfolio;

