import React from "react";
import FooterContactForm from './FooterContactForm';
import indiaFlag from '../../Image/indiaFlag.svg';
import UAEflag from '../../Image/UAEflag.svg';
// import location from '../../Image/Location.svg';
import classes from './CSS/Footer.module.css';


const Footer = () => {
  return (
    <div
      className={classes["col-md-12 footer"]}
      style={{ backgroundColor: "#f4f9fc", padding: "5px" }}>
      
      <div className={classes["rowrow"]}>
        <div className={classes["ffrme"]}>
          <div className={classes["frame-border"]}>
          <div className={classes["iframe-container"]}>
            <iframe
              width="250"
              height="155"
              src="https://www.youtube.com/embed/DOMbQuiJu3E?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div></div>
          <p className={classes["cont-p"]}> CONTACT</p>
         
          <div className={classes["col-md-10 mt-3"]}>
            
            <p className={classes["add-content"]} >
              <img src={indiaFlag} height={25} />&nbsp;&nbsp;Mumbai | Headquarter
              <br/>
              Todi Industrial Estate, A Wing, 41, 4th floor,<br />
              Sunmill Compound, Lower Parel- West<br />
              Mumbai, Pincode- 400013,
            <br />
            <br/>
            <img src={indiaFlag} height={25} />&nbsp;&nbsp;BANGALORE | Branch Office
              <br/>
              4th Floor, No 22, Salarpuria Towers-I Industrial<br />
              Layout, Hosur Rd, 7th Block, Koramangala,<br />
              Bengaluru, Karnataka 560095
            <br />
            <br />
            <img src={UAEflag} height={25} />&nbsp;&nbsp;UAE | Branch Office<br />
              Business Center RAKEZ, Ras AI, Khaimah,<br />
              United Arab Emirates  
            </p>
          </div>
          <div className={classes["col"]}>
           
          </div>
        </div>
        <div className={classes["col-md-6"]}>
          <FooterContactForm></FooterContactForm>
        </div>
      </div>
    </div>
  );
};

export default Footer;
