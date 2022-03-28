import React from 'react';
import Benefit from '../../Image/Benefit.svg';
import classes from './CSS/Benefits.module.css';

export default function Benefits() {
    return (
        <div className={classes['benefits']} id='BeNeFiTs'>
            <div className={classes["aa"]}>
            <div className={classes["dd"]}></div> 
            <div className={classes["bb"]}>
            <img className={classes['benefit-img']} src={Benefit} />
            </div>
            <div className={classes["cc"]}>
            <h1 className={classes['cc-h1']}>Why Outsource<span className={classes['span-h1']}><br/><b>LEAD GENERATION?</b></span></h1>
            {/* <br />
            <br/> */}
            <p className={classes['cc-para']}>Strategic SEO will help you increase your organic leads. Our SEO experts by following a streamlined project management process will generate organic qualified leads daily without paying Search Engines.</p>
            {/* <div className={classes"dd"}]></div> */}
            </div>
            <div className={classes["dd"]}></div>
            </div>
            </div>
    )
};
