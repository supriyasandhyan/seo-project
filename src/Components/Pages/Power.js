import React from 'react';
import classes from '../Pages/CSS/Power.module.css';
import LineShape from '../../Image/LineShape.svg';
import newlady from '../../Image/newlady.png';
function Power() {
    return (
        <div className={classes['power']}>
            <div className={classes['power-container']}>
            
                <div className={classes['power-main']}>
                
                    <div className={classes['power-btn']}>
                    <h1>HARNESS THE POWER OF <b>SEO</b></h1>
                        <a href='#GetInTouch'>
                            <button className={classes['power-enq-btn']}>
                                ENQUIRE NOW
                            </button>
                        </a>
                    </div>
                    <div className={classes['power-img']}>
                        <img src={LineShape} className={classes['line-shape']} />
                        <img src={newlady} className={classes['new-lady']} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Power;