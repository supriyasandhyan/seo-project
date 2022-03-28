import React, { useState } from 'react';
import classes from './CSS/Home.module.css';
import googleimg from '../../Image/googleimg.svg';
import Banner1 from '../../Image/Banner1.jpg';
import Banner2 from '../../Image/Banner2.jpg';
import Banner3 from '../../Image/Banner3.jpg';
import Banner4 from '../../Image/Banner4.jpg';
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

                <div className={classes['home-parent']}>
                <div className={classes['Home-head']}>
                    <h2>It’s Good to be On Top 5.</h2>
                    <h1>ARE YOU?</h1><br/>
                </div>
                <div className={classes['home-head-btn']}>
                    <a href='#GetInTouch'>
                        <button className={classes['home-getintouch']}>
                            <strong>GET FREE QUOTE</strong>
                        </button>
                    </a>        
                </div>
                </div>

                <div className={classes['home--paragraph']}>
                    <p className={classes['home-paragraf']}>
                    Don't let the drop in ranking impact your incoming leads. Ask Nimap the secret to 
                    <p>
                    level up your organic ranking with advanced SEO Strategy.
                    </p>
                    </p>
                   
                </div>


                <Carousel
                    style={{height:'95vh'}}
                    autoPlay={true}
                    interval={4000}
                    infiniteLoop={true}
                    transitionTime={2.5}
                    stopOnHover={false}
                    showThumbs={false}
                    height='95vh'
                    showIndicators={false}
                    showStatus={false}>

                    <div className={classes['home-images']}>
                    <img src={googleimg} />
                    </div>
                    <div className={classes['home-images']}>
                    <img src={Banner1} />
                    </div>
                    <div className={classes['home-images']}>
                    <img src={Banner2} />
                    </div>
                    <div className={classes['home-images']}>
                    <img src={Banner3} />
                    </div>
                    <div className={classes['home-images']}>
                    <img src={Banner4} />
                    </div>
                    
                </Carousel>

                {/* <div className={classes['media-icons']}>
                    <i id={classes['messageicon']} class="bi bi-person-rolodex" onClick={() => setShow(true)}></i>
                    <PopUp show={show} onClose={() => setShow(false)}>
                    </PopUp>
                </div> */}
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
