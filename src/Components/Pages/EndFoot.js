import React from 'react'
import classes from './CSS/Footer.module.css';
import Twitter from '../../Image/Twitter.svg';
import Facebook  from '../../Image/Facebook.svg';
import Insta from '../../Image/Insta.svg';
import linkedin from '../../Image/linkedin.svg';

export default function EndFoot() {
    return (
        <div>
    <div className={classes["parent-footer"]}>
    <div className={classes["paratxt1"]}>
       <p>FOLLOW US ON</p>
    </div>
    <div className={classes["icon-fld"]}>
      <a href="https://www.facebook.com/nimap.infotech.73/">
      <img className={classes['fcbk']} src={Facebook} height={20} /></a>&nbsp;&nbsp;&nbsp;
      <a href="https://twitter.com/NimapInfotech">
      <img className={classes['twtr']} src={Twitter} height={20} /></a>&nbsp;&nbsp;&nbsp;
      <a href="https://www.instagram.com/nimapinfotech/?utm_medium=copy_link">
      <img className={classes['inst']} src={Insta} height={20} /></a>&nbsp;&nbsp;&nbsp;
      <a href="https://www.linkedin.com/company/nimapinfotech/">
      <img className={classes['lnkd']} src={linkedin} height={20} /></a>
    </div>
  </div>
</div>
    )
}
