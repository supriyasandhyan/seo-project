import React, { useState } from 'react';
import classes from './CSS/Home.module.css';
import Banner1 from '../../Image/Banner1.jpg';
import Banner2 from '../../Image/Banner2.jpg';
import Banner3 from '../../Image/Banner3.jpg';
import Banner4 from '../../Image/Banner4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Top from './Top';
import GetinTouch from './GetinTouch';
import Power from './Power';
import SEO from './SEO';
import Edge from './Edge';
import Benefits from './Benefits';
import Sales from './Sales';
import Policy from './Policy';
import Process from './Process';
import Faq from './Faq';
import Testimonial from './Testimonial';
import Services from './Services';
import Glance from './Glance';
import Plan from './Plan';
import Footer from './Footer';
import EndFoot from './EndFoot';
import PopUp from './PopUp';

export default function Home() {
    return (
        <>
            <div className={classes['home']}>

                <a href='#GetInTouch'>
                   
                    <div class="w-100">
                        <div id="myCarousel" class="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">

                            <ol class="carousel-indicators">
                                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Banner1} class="d-block w-100" alt="Slide 1" />
                                </div>
                                <div class="carousel-item">
                                    <img src={Banner2} class="d-block w-100" alt="Slide 2" />
                                </div>
                                <div class="carousel-item">
                                    <img src={Banner3} class="d-block w-100" alt="Slide 3" />
                                </div>
                                <div class="carousel-item">
                                    <img src={Banner4} class="d-block w-100" alt="Slide 4" />
                                </div>
                            </div>


                            {/* <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a> */}
                        </div>
                    </div>
                </a>

            </div>
            <div>
                <Top />
            </div>
            <div>
                <GetinTouch />
            </div>
            <div>
                <Power />
            </div>
            <div>
                <SEO />
            </div>
            <div>
                <Edge />
            </div>
            <div>
                <Benefits />
            </div>
            <div>
                <Sales />
            </div>
            <div>
                <Policy />
            </div>
            <div>
                <Process />
            </div>
            <div>
                <Faq />
            </div>
            <div>
                <Testimonial />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Glance />
            </div>
            <div>
                <Plan />
            </div>
            <div>
                <Footer />
            </div>
            <div>
                <EndFoot />
            </div>
        </>
    )
};
