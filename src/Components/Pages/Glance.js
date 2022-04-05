import React from 'react';
import classes from './CSS/Glance.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Glance1 from '../../Image/Glance1.svg';
import Glance2 from '../../Image/Glance2.svg';

function Glance() {
  return(
      <div className={classes['glance']}>
      <h1 className={classes['glancetext']}>A Glance Of Our <b>CLIENT</b> work</h1>
      <Carousel 
      autoPlay={true} 
      interval={4000} 
      infiniteLoop={true} 
      transitionTime={2.5}
      stopOnHover={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}	
      // width='80%'
      showStatus={false}>
                <div className={classes['glanceimg']}>
                    <img src={Glance1} />           
                </div>
                <div className={classes['glanceimg']}>
                    <img src={Glance2} />
                </div>
                
            </Carousel>
            </div>
  )
}
export default Glance;
