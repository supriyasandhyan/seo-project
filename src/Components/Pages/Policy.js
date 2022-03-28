import React, { useState } from 'react';
import policy from '../../Image/policy.svg';
import classes from './CSS/Policy.module.css';

export default function Policy() {

    const [clicking1, setClicking1] = useState(true);
    const [clicking2, setClicking2] = useState(false);
    const [colorclass1, setColorclass1] = useState('Initialbtn1');
    const [colorclass2, setColorclass2] = useState('Initialbtn2');

    const polcy = () => {
        if (colorclass2 === 'poli2') {
            setClicking1(true)
            setClicking2(false)
            setColorclass1('Initialbtn1')
            setColorclass2('Initialbtn2')
        }
    }

    const clrity = () => {
        if (colorclass2 === 'Initialbtn2') {
            setClicking1(false)
            setClicking2(true)
            setColorclass1('poli1')
            setColorclass2('poli2')
        }
    }
    return (
        <div className={classes['policy']} id='policyid'>
            <div className={classes["aa"]}>
                <div className={classes["dd"]}></div>
                <div className={classes["bb"]}>
                    <img className={classes['policy-img']} src={policy} />
                </div>

                <div className={classes["poli-cc"]}>
                    <h1 className={classes['policc-h1']}>Our Pricing Policy
                        <span className={classes['spanpoli-h1']}><br />THAT ENSURES CLARITY
                        </span></h1>
                    {clicking1 && <p className={classes['policc-para']}>
                        Hire SEO or Outsource SEO services from Nimap
                        Infotech that helps your brand makes its
                        presence in the online market.
                        Race through the competition and get the
                        results that speak for itself
                        You can hire our SEO Experts for your workplace
                        on a timely basis according to your Digital
                        Marketing Requirements
                    </p>}
                    {clicking2 && <p className={classes['claritypara']}>
                        We provide.<br />
                        If you have visualized the needs for your digital<br />
                        marketing activities and want to implement it <br />
                        then go for our fixed price model
                        
                        Our DM experts will assist you on a<br />
                        one-on-one basis.<br />
                        Helps you to turn your vision into reality by <br />
                        implementing the Digital marketing activities.</p>}
                </div>
                {/* <div className={classes["dd"]}></div> */}
                
                {clicking2 && <div ><p className={classes['claritypara2']}>
                    We are versatile enough to settle the way of working and payment methods, we can divide it on a
                    <br/>monthly basis instead of doing all payment at the single go.<br/>
                    <br/>Payment only if the work is complete.<br/>
                    <br/>Dedicated team for the project.</p></div>}

                <div className={classes['mainpolibtn']}>
                    <button onClick={polcy} className={classes[colorclass1]}>HIRE AN EXPERT</button>
                    &nbsp;
                    <button onClick={clrity} className={classes[colorclass2]}>FIXED PRICE WORK</button>
                </div>

            </div>

        </div>
    )
}
