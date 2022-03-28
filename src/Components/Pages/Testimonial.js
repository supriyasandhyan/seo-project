import React , { useState } from 'react';
import classes from './CSS/Testimonial.module.css';
import Keyboard from '../../Image/keyboard.svg';
import Profile from '../../Image/Profile.svg';

function Testimonial() {

const [dot1, setDot1] = useState(true);
const [dot2, setDot2] = useState(false);
const [dot3, setDot3] = useState(false);
const [dot4, setDot4] = useState(false);

const firstdot=()=>{
  setDot1(true)
  setDot2(false)
  setDot3(false)
  setDot4(false)
}
const seconddot=()=>{
  setDot1(false)
  setDot2(true)
  setDot3(false)
  setDot4(false)
}
const thirddot=()=>{
  setDot1(false)
  setDot2(false)
  setDot3(true)
  setDot4(false)
}
const forthdot=()=>{
  setDot1(false)
  setDot2(false)
  setDot3(false)
  setDot4(true)
}

  return(
       <div className={classes['testimonial']} id='TestiMonial'>
        <div className={classes['testi-h1']}>
        <h1 >Testimonials</h1></div>


        <div className={classes["ftt"]}>
          <div className={classes['maintest']}>
          <div className={classes["iframe-container"]}>
            <iframe
              className={classes['testframe']}
              width="250"
              height="155"
              src="https://www.youtube.com/embed/ByCs9rGNsTY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div><br/>
          <div className={classes['youtext']}>
          <h4 className={classes["cont-p"]}>Paras Jain</h4>
          <p>Owner</p>
          </div></div>

          <div className={classes['maintest']}>
          <div className={classes["iframe-container"]}>
            <iframe
              className={classes['testframe']}
              width="250"
              height="155"
              src="https://www.youtube.com/embed/izLepT8W-CI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <br/>
          <div className={classes['youtext']}>
          <h4 className={classes["cont-p"]}>Ashok Raj</h4>
          <p>Vice President</p>
          </div></div>

          <div className={classes['maintest']}>
          <div className={classes["iframe-container"]}>
            <iframe
              className={classes['testframe']}
              width="250"
              height="155"
              src="https://www.youtube.com/embed/e-D8YtVjcS8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <br/>
          <div className={classes['youtext']}>
          <h4 className={classes["cont-p"]}>Satish</h4>
          <p>Project Manager</p>
          </div></div>

          <div className={classes['maintest']}>
          <div className={classes["iframe-container"]}>
            <iframe
              className={classes['testframe']}
              width="250"
              height="155"
              src="https://www.youtube.com/embed/wk_XajDQ9E0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <br/>
          <div className={classes['youtext']}>
          <h4 className={classes["cont-p"]}>Kevin Shah</h4>
          <p>Owner</p>
          </div>
          </div></div>

<div className={classes['keyboardimg']}>
  <div className={classes['mainparent']}>
  <div className={classes['blank']}>
    <img className={classes['mngricon']} src={Profile} height={70} />

    {dot1 &&<><p className={classes['blank-text']}><strong>Bharat Doshi</strong><br/>Marketing Manager<br/>Ambuja Cement</p>
    <p className={classes['lorem']}><i id={classes['Quotes']} class="fa-solid fa-quote-left"></i>Using their outsourcing service they offer you a long list of proffessionals that are eager to work<br/>
     with you. I hired a developer from Nimap only once but my experience was so good that if in future<br/>
     I have any work I will definitely approach them.<i id={classes['Quotes']} class="fa-solid fa-quote-right"></i></p> </>}

     {dot2 &&<><p className={classes['blank-text']}><strong>Mr Brahm Vasudeva</strong><br/>Managing Director<br/>Hawkins</p>
    <p className={classes['lorem']}><i id={classes['Quotes']} class="fa-solid fa-quote-left"></i>I wanted to design a new website for my business but i was very doubtful to share my company's data.<br/>
     then I met Sagar and he introduced me to his web developer who was equally kind and gentle.<br/>
     They assured me about all the security norms and designed my website in a very effective manner.<i id={classes['Quotes']} class="fa-solid fa-quote-right"></i></p> </>}

     {dot3 &&<><p className={classes['blank-text']}><strong>Krish Iyer</strong><br/>Director<br/>Walmart</p>
    <p className={classes['lorem']}><i id={classes['Quotes']} class="fa-solid fa-quote-left"></i>Nimap is a collective team of IT developers who are well trained and certified for coding all kinds of codes.<br/>
     Their amazing team members can code and design any app as per your requirement.<i id={classes['Quotes']} class="fa-solid fa-quote-right"></i></p> </>}

     {dot4 &&<><p className={classes['blank-text']}><strong>Calvin Lee</strong><br/>Group head<br/>skyscape</p>
    <p className={classes['lorem']}><i id={classes['Quotes']} class="fa-solid fa-quote-left"></i>Nimap provides you extremely productive and helpful services to understand and increase<br/>
  your business. They offer you loads of choice to design your app into various different<br/>
  techniques and ways. It's been great working with thier team members.<i id={classes['Quotes']} class="fa-solid fa-quote-right"></i></p> </>}
  </div>
<img className={classes['keyimg']} src={Keyboard} />
<div className={classes["dot"]}>
  <span onClick={firstdot} className={dot1 ? classes['activechild'] : classes['child']}></span>
  <span onClick={seconddot} className={dot2 ? classes['activechild'] : classes['child']}></span>
  <span onClick={thirddot} className={dot3 ? classes['activechild'] : classes['child']}></span>
  <span onClick={forthdot} className={dot4 ? classes['activechild'] : classes['child']}></span>
</div>
</div>
</div>

  </div>
  );
};
export default Testimonial;
