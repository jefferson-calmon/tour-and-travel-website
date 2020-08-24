import React from 'react';

import Logo from '../../assets/logo.svg';
import imageBanner from '../../assets/banner.svg';


import './styles.css';

const Landing = () => {
    return(
        <>
            <section id="banner">
                <header id="topo">
                    <div className="content">
                        <h1>
                            <a href="/">
                                <img src={Logo} alt="Tour and Travel"/>
                            </a>
                        </h1>
        
                        <nav id="navigation">
                            <ul>
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="/">Destinations</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Partner</a></li>
                                <li className="buttonHeader"><a href="/">login</a></li>
                                <li className="buttonHeader full"><a href="/">Register</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div id="containerBanner">
                    <div className="content">
                        <div className="leftBox">
                            <h1>Explore and<br />Travel</h1>

                            <h3>Holiday finder</h3>

                            <div className="gridInputsBanner">
                                <select name="sel" id="select">
                                    <option value="Location">Location</option>
                                </select>
                                <select name="sel" id="select">
                                    <option value="Activity">Activity</option>
                                </select>
                                <select name="sel" id="select">
                                    <option value="Grade">Grade</option>
                                </select>
                                <select name="sel" id="select">
                                    <option value="Date">Date</option>
                                </select>
                            </div>

                            <a href="#explore" className="button">Explore</a>
                        </div>

                        <div className="rightBox">
                            <img src={imageBanner} alt="Tour and Travel"/>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Landing;