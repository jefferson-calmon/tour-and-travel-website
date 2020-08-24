import React from 'react';

import Logo from '../../assets/logo.svg';
import imageBanner from '../../assets/banner.svg';
import imageWay from '../../assets/way.svg';
import iconMore from '../../assets/moreIcon.svg';
import iconCircle from '../../assets/circleIcon.svg';

import ButtonLink from '../../components/Button';


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
                            <img src={iconMore} className="icon" alt="icon more"/>
                            <img src={iconCircle} className="icon" alt="icon circle"/>
                            <img src={iconCircle} className="icon" alt="icon circle"/>

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

                            <ButtonLink link="#explore" size={1.32605} text="Explore" />
                        </div>

                        <div className="rightBox">
                            <img src={imageBanner} alt="Tour and Travel"/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="way">
                <div className="content">
                    <div className="imageWay">
                        <img src={imageWay} alt="Imagem da section way: Tour and Travel"/>

                        <img src={iconMore} className="icon" alt="icon more"/>
                    </div>

                    <div className="textWay">
                        <h2>A new way to explore the world</h2>

                        <p>
                        For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way
                        </p>

                        <ButtonLink link="#learn" size={1.24805} text="Learn more" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;