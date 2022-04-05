import React from 'react';
import classes from '../Pages/CSS/Power.module.css';
import Banner5 from '../../Image/Banner5.png';

function Power() {
    return (
        <div className={classes['power']}>
            <div className={classes['power-images']}>
                <img src={Banner5} className={classes['banner5']} />
                <a href='#GetInTouch' className={classes['talk']}>
                <button className={classes['powerbttn']}>KNOW MORE</button>
                </a>
            </div>
        </div>
    )
}

export default Power;