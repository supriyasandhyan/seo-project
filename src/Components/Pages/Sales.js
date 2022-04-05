import React from 'react';
import classes from './CSS/Sales.module.css';
import traffic from '../../Image/traffic.svg';
import LineShape from '../../Image/LineShape.svg';
import '../Pages/CSS/sales.scss'
export default function Sales() {
    return (
     
            <div className="sales-container">
                <div className='sales'>
                    <div className='sales__firstHalf'>
                        <div className="sales__firstHalf-para">
                            <div className="content">
                                <h2 >DRIVE TRAFFIC & DOUBLE SALES</h2>
                                <h1>From Your Website</h1>
                            </div>
                        </div>
                        <div className="sales__firstHalf-btn">
                            <a href='#GetInTouch'>
                            <button>ENQUIRE NOW</button>
                            </a>
                        </div>
                    </div>
                    <div className='sales__secondHalf'>
                      <img className='linesvg' src={LineShape} />
                     <img className='ladyimg' src={traffic}  />
                    </div>
                </div>
            </div>
    
    )
};
