import React from 'react';
import classes from './CSS/Sales.module.css';
import traffic from '../../Image/traffic.svg';
import LineShape from '../../Image/LineShape.svg';

export default function Sales() {
    return (
        <div className={classes['salebig']}>
        <div className={classes['sales']}>
           <div className={classes['sales-text']}>
           <h3 className={classes['sale-h3']}></h3>
           <h2 className={classes['sale-h2']}>DRIVE TRAFFIC & DOUBLE SALES</h2>
           <h1 className={classes['sale-h1']}>From Your Website</h1>
           </div>
           <div className={classes['sale-img']}>
           <img src={LineShape} className={classes['line']} />
           <img src={traffic} className={classes['ladiImage']}  />
           </div>
           <div className={classes['salebtn']}>
           <a href='#GetInTouch'>
           <button className={classes['enquire-btn']}>ENQUIRE NOW</button></a></div>
        </div>
        </div>
    )
};
