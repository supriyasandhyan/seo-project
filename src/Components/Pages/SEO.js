import React from 'react';
import classes from './CSS/SEO.module.css';
import WeeklyMonthly from '../../Image/WeeklyMonthly.svg';
import twoAccesstoProgress from '../../Image/twoAccesstoProgress.svg';
import oneGoogleCertified from '../../Image/oneGoogleCertified.svg';
import DedicatedProject from '../../Image/DedicatedProject.svg';
import ExtreimelyCompetetive from '../../Image/ExtreimelyCompetetive.svg';


function SEO() {
    return (
        <div className={classes['seo']} id='SEO'>
            <p className={classes['seo-p']}>Why Use <b>LEAD GENERATION</b> SEO Service From <b>NIMAP INFOTECH?</b></p>
            {/* <p className={classes['seo-pp']}><b>NIMAP INFOTECH?</b></p> */}

            <div className={classes['row']}>

                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                        <img src={oneGoogleCertified} className={classes['mob-img']} height={60} />
                    </div>
                    <br />
                    <div className={classes['content']}>
                        <strong>100% </strong> Google Certified
                        <br />SEO  Strategies
                    </div>
                </div>

                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                        <img src={DedicatedProject} height={60} />
                    </div>
                    <br />
                    <div className={classes['content']}>
                        Dedicated SEO Project
                        <br /><strong>Managers</strong>
                    </div>
                </div>

                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                        <img src={ExtreimelyCompetetive} height={60} />
                    </div>
                    <br />
                    <div className={classes['content']}>
                        Extreimely Competetive &
                        <br /> Affordable <strong>Costs</strong>
                    </div>
                </div>
            </div>
            {/* <br/>
<br/> */}
            <div className={classes['row1']}>
                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                        <img src={twoAccesstoProgress} height={60} />
                    </div>
                    <br />
                    <div className={classes['content']}>
                        <strong>24*7</strong> Access to Progress
                        <br />& Reports
                    </div>
                </div>

                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                        <img src={WeeklyMonthly} height={60} />
                    </div>
                    <br />
                    <div className={classes['content']}>
                        Weekly Monthly
                        <br /><strong>Reporting Analysis</strong>
                    </div>
                </div>
            </div>
            <div>
                <a href='#GetInTouch'>
                    <button className={classes['enqbtn']}>ENQUIRE NOW</button></a>
            </div>

        </div>
    )
}
export default SEO;
