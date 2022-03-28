import React from 'react';
import plan from '../../Image/plan.svg';
import classes from './CSS/Plan.module.css';

export default function Plan() {
    return (
        <div className={classes['plan']}>
            <div className={classes["aa"]}>
            <div className={classes["dd"]}></div> 
            <div className={classes["bb"]}>
            <img className={classes['plan-img']} src={plan} />
            </div>
            <div className={classes["cc"]}>
            {/* <h1 className={classes['cc-h1']}>
            Let's<br/>Discus Your<br/>Plan-Of-Action
            </h1> */}
            <div className={classes['pln-text']}>
           <h3 className={classes['pln-h3']}>Let's</h3>
           <h2 className={classes['pln-h2']}>Discus Your</h2>
           <h1 className={classes['pln-h1']}><b>PLAN-OF-ACTION</b></h1>
           </div>
            <br />
            <br/>
            <a href='#GetInTouch'>
            <button className={classes['planbttn']}>LET'S DISCUSS</button></a>
            {/* <div className={classes"dd"}]></div> */}
            </div>
            <div className={classes["dd"]}></div>
            </div>
            </div>
    )
};