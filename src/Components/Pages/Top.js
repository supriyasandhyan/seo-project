import React from 'react';
import classes from './CSS/Top.module.css';
import RelianceLogo from '../../Image/RelianceLogo.svg';
import KotakLogo from '../../Image/KotakLogo.svg';
import AdaniLogo from '../../Image/AdaniLogo.svg';
import VedantaLogo from '../../Image/VedantaLogo.svg';
import tcs from '../../Image/tcs.svg';
import Accenture from '../../Image/Accenture.svg';
import techMahindra from '../../Image/techMahindra.svg';
import Tata from '../../Image/Tata.svg';
import Adobe from '../../Image/Adobe.svg';
import Yesbank from '../../Image/Yesbank.svg';
import Sherkhan from '../../Image/Sherkhan.svg';
import Muthoot from '../../Image/Muthoot.svg';
import Mindful from '../../Image/Mindful.svg';
import LT from '../../Image/LT.svg';
import { Carousel } from 'react-responsive-carousel';
import './CSS/top.scss'

function Top() {
    return (

        <div className={classes['top']} id='OutSource'>

            {/* <div className={classes['TOP']}> */}
            <div className={classes['top-main']}>
                <div className={classes['top-right']}>
                    <div><p>TRUSTED BY FORTUNE <b style={{ fontSize: "5.5vw" }}> 500+ </b></p></div>
                    <div style={{ lineHeight: "0.3" }}> <p> COMPANIES</p></div>
                </div>
                <div className={classes['ptext']}>
                    <a href='#GetInTouch' className={classes['talk']}>
                        Talk to Us
                    </a>
                </div>
            </div>

            {/* </div> */}

            {/* <div className={classes["marquee"]}> */}
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <img loading='lazy' className={classes['pic1']} src={RelianceLogo} height={15} alt="" />
                        </div>
                        <div class="slide">
                            <img className={classes['pic2']} src={KotakLogo} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic3']} src={AdaniLogo} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic4']} src={VedantaLogo} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic5']} src={techMahindra} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic6']} src={tcs} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic7']} src={Accenture} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic8']} src={Adobe} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic9']} src={LT} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic10']} src={Mindful} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic11']} src={Muthoot} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic12']} src={Sherkhan} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic13']} src={Tata} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic14']} src={Yesbank} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic1']} src={RelianceLogo} height={15} alt="" />
                        </div>
                        <div class="slide">
                            <img className={classes['pic2']} src={KotakLogo} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic3']} src={AdaniLogo} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic4']} src={VedantaLogo} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic5']} src={techMahindra} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic6']} src={tcs} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic7']} src={Accenture} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic8']} src={Adobe} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic9']} src={LT} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic10']} src={Mindful} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic11']} src={Muthoot} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic12']} src={Sherkhan} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic13']} src={Tata} height={10} />
                        </div>
                        <div class="slide">
                            <img className={classes['pic14']} src={Yesbank} height={10} />
                        </div>
                    </div>
                </div>
            {/* </div> */}


            <div className={classes['Seo-Button']}>
                <button className={classes['seo-btn1']}>
                    OUTSOURCE SERVICE
                </button>
                <a href='#policyid'>
                    <button className={classes['seo-btn2']}>
                        HIRE AN EXPERT
                    </button>
                </a>
            </div>

        </div>

    )
};

export default Top;

