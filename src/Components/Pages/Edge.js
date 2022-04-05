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

        <div className={classes["rov-div"]}>
          <div className={classes['bg-img']}>
            <img className={classes['ecomicon']} src={ECommerceSEO} />
          </div>
          <div>
            <p className={classes["mt-3"]} >
              <strong>E - Commerce SEO</strong>
            </p>
          </div>
          <div>
            <span>Our SEO Experts will help you rank your
              product/services and category pages
              and perform all the related activities to
              generate qualified leads.
            </span>
          </div>
        </div>

        <div className={classes["rov-div"]}>
          <div className={classes['bg-img1']}>
            <img className={classes['loclicon']} src={LocalSEO} />
          </div>
          <div>
            <p className={classes["mt-3"]} >
              <strong>Local SEO</strong></p>
          </div>
          <div>
            <span>This will help you generate local enquiries</span>
          </div>
        </div>


        <div className={classes["rov-div"]}>
          <div className={classes['bg-img2']}>
            <img className={classes["linkicon"]} src={LinkBuildingService} />
          </div>
          <div>
            <p className={classes["mt-3"]} >
              <strong>Link Building Service</strong>
            </p></div>
          <div>
            <span>Our SEO experts will build quality links
              (Guest Post, Article submission,
              Business Listings, etc) according to
              Google’s Algorithm</span>
          </div>
        </div>


        <div className={classes["rov-div"]}>
          <div className={classes['bg-img3']}>
            <img className={classes['seoicon']} src={SEOForSmallBusiness} />
          </div>
          <div>
            <p className={classes["mt-3"]}>
              <strong>SEO For Small Business</strong></p></div>
          <div>
            <span> Our Advanced SEO Strategy can 
              help small businesses generate 
              local and international enquiries 
              with niche targeting</span>
          </div>
        </div>


        <div className={classes["rov-div"]}>
          <div className={classes['bg-img4']}>
            <img className={classes["hotracicon"]} src={HOTRACSystem} />
          </div>
          <div>
            <p className={classes["mt-3"]} >
              <strong>360-Degree HOTRAC System</strong></p></div>
          <div>
            <span>Robust Measurable Digital marketing
              efforts helps you to generate Leads
              and Enquiries for your business
              </span>
          </div>
        </div>

      </div>


      <div>
        <a href='#GetInTouch'>
          <button className={classes['bttnn']}>LET'S DISCUSS</button></a>
      </div>
    </div>
  )
}
