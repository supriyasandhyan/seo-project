import React from 'react';
import classes from './CSS/Services.module.css';
import MobileApp from '../../Image/MobileApp.svg';
import WebApp from '../../Image/WebApp.svg';
import UIUX from '../../Image/UIUX.svg';
import ITStaff from '../../Image/ITStaff.svg';

function Services() {
    return (
        <div className={classes['services']}>
            <h2 className={classes['service-h2']}>Our Other <b>SERVICES</b></h2>

            <div className={classes['row']}>

                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                     <img src={MobileApp} className={classes['mob-img']} height={90} />
                    </div>
                    <br />
                    <div className={classes['contnt']}>
                    <p className={classes['contntp']}>Mobile App <br/> Development</p>
                    </div>
                </div>

                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                     <img src={WebApp} className={classes['web-img']} height={90} />
                    </div>
                    <br />
                    <div className={classes['contnt']}>
                    <p className={classes['contntp']}>Web App <br/> Development</p>
                    </div>
                </div>

                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                     <img src={UIUX} className={classes['uiux-img']} height={90} />
                    </div>
                    <br />
                    <div className={classes['contnt']}>
                    <p className={classes['contntp']}>UI/UX <br/> Designing</p>
                    </div>
                </div>

                <div className={classes['row-item1']}>
                    <div className={classes['img-icon']}>
                     <img src={ITStaff} className={classes['itstaff-img']} height={95} />
                    </div>
                    <br />
                    <div className={classes['contnt']}>
                    <p className={classes['contntp']}>IT Staff<br/> Augmentation</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default  Services;
