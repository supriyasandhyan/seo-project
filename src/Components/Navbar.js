import React from 'react';
import { useState, useEffect } from 'react';
import NimapLogo from '../Image/NimapLogo.png';
import './Navbar.css';

export default function Navbar() {
    const [collapse, setState] = useState(false)

    return (
        <div>
            <nav>
                <div>
                    <div>
                        <div className='navbarr'>
                            <img className='nav-img' src={NimapLogo}></img>
                            <button className='hamburger' onClick={()=>{
                                if(collapse){
                                    document.getElementById('nav_ul').style.display = "none"
                                }
                                else{
                                    document.getElementById('nav_ul').style.display = "block"
                                }
                                setState(!collapse)
                            }}>Burger</button>
                            <ul className='navbar-ul' id='nav_ul'>
                                <li className='navbar-ul-li'>
                                    </li>
                                <li className='navbar-ul-li'>

                                    <a href='#SEO'>SEO Service
                                        &nbsp;
                                        <i className="fa fa-angle-down "></i>
                                    </a>
                                </li>

                                <li className='navbar-ul-li'>
                                    <a href='#BeNeFiTs'>Benefits
                                        &nbsp;
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </li>

                                <li className='navbar-ul-li'>
                                    <a href='#TestiMonial'>Testimonials
                                        &nbsp;
                                        <i className="fa fa-angle-down" ></i>
                                    </a>
                                </li>

                                <li className='navbar-ul-li'>
                                    <a href='#OutSource'>Outsource Now
                                        &nbsp;
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </li>
                                <li className='navbar-ul-li'>
                                <a href='#GetInTouch'>
                                <button className='nav-bttn'>
                                    <strong>GET FREE QUOTE</strong>
                                </button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};
