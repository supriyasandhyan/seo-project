import React from 'react';
import NimapLogo from '../Image/NimapLogo.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2">
                            <img className='navbar-logo' src={NimapLogo}></img>
                        </div>
                        <div class="col-lg-8">

                            <ul className="navbar-links">

                                <li className="navbar-dropdown">

                                    <a href='#SEO'>SEO Service
                                        &nbsp;
                                        <i className="fa fa-angle-down "></i>
                                    </a>
                                </li>

                                <li className="navbar-dropdown">
                                    <a href='#BeNeFiTs'>Benefits
                                        &nbsp;
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </li>

                                <li className="navbar-dropdown">
                                    <a href='#TestiMonial'>Testimonials
                                        &nbsp;
                                        <i className="fa fa-angle-down" ></i>
                                    </a>
                                </li>

                                <li className="navbar-dropdown">
                                    <a href='#OutSource'>Outsource Now
                                        &nbsp;
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-2">
                            <a href='#GetInTouch'>
                                <button className='nav-bttn'>
                                    <strong>GET FREE QUOTE</strong>
                                </button></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};
