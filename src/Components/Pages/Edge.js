import React from 'react'
import classes from './CSS/Edge.module.css';
import ECommerceSEO from '../../Image/ECommerceSEO.svg';
import HOTRACSystem from '../../Image/HOTRACSystem.svg';
import LocalSEO from '../../Image/LocalSEO.svg';
import LinkBuildingService from '../../Image/LinkBuildingService.svg';
import SEOForSmallBusiness from '../../Image/SEOForSmallBusiness.svg';

export default function Edge() {
    return (
        <div className={classes['edge']}>
          <h1 className={classes['edge-h']}>CUTTING-EDGE LEAD GENERATION</h1>
          <p className={classes['edge-p']}>that let wonders happen organically</p>

          <div className={classes["row11"]}>
          
          <div className={classes['bg-img']}>
          <img src={ECommerceSEO} width={'36px'} /></div>&nbsp;
          <p className={classes["mt-3"]} >
          <strong>E - Commerce SEO</strong>
          <br/>
          <span> Our SEO Experts will help you rank your<br/>
          product/services and category pages<br/>
          and perform all the related activities to<br/>
          generate qualified leads.</span>
          <br /><br/></p>
          &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          <div className={classes['bg-img1']}>
          <img className={classes['loclicon']} src={LocalSEO}  width={'34px'} /></div>&nbsp;
          <p className={classes["mt-3"]} >
          <strong>Local SEO</strong>
          <br/>
          <span> This will help you generate<br/>
          local enquiries</span>  
          </p>      
          </div> 
 
          <div className={classes["row12"]}>
          <div className={classes['bg-img1']}>
          <img className={classes["linkicon"]} src={LinkBuildingService} width={'35px'} /></div>&nbsp;
          <p className={classes["mt-3"]} >
          <strong>Link Building Service</strong>
          <br/>
          <span> Our SEO experts will build quality links<br/>
          (Guest Post, Article submission,<br/>
          Business Listings, etc) according to<br/>
          Google’s Algorithm</span>
          <br /><br/>
          </p>
          &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
           <div  className={classes['bg-img']}>    
          <img src={SEOForSmallBusiness} width={'31px'} /></div>&nbsp;
          <p className={classes["mt-3"]}>
          <strong>SEO For Small Business</strong>
          <br/>
          <span> Our Advanced SEO Strategy can <br/>
               help small businesses generate <br/>
               local and international enquiries <br/>
               with niche targeting</span>
          </p>
          </div>

          <div className={classes["row12"]}>
          <div className={classes['bg-img3']}>
          <img className={classes["hotracicon"]} src={HOTRACSystem} width={'35px'} /></div>&nbsp;
          <p className={classes["mt-3"]} >
          <strong>360-Degree HOTRAC System</strong>
          <br/>
          <span>Robust Measurable Digital marketing<br/>
          efforts helps you to generate Leads<br/>
          and Enquiries for your business<br/></span>
          </p>
          </div>
          
          <div>
          <a href='#GetInTouch'>
          <button className={classes['bttnn']}>LET'S DISCUSS</button></a>
          </div>  
        </div>
    )
}
