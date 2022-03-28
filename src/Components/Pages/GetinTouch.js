import React from 'react'
import axios from 'axios';
import classes from './CSS/GetinTouch.module.css';
import Location from '../../Image/Location.svg';
import mail from '../../Image/mail.svg';
import UAEflag from '../../Image/UAEflag.svg';
import indiaflag from '../../Image/indiaFlag.svg';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  projectDesc: '',
}

 const onSubmit=async (data, { setSubmitting,resetForm }) => {
    let details = {
      name: data.name,
      email: data.email,
      projectDesc: data.projectDesc,
    };
    console.log(details)

    const url = "http://localhost:4800/api/mail?from=360";

    const res = await new axios.post(url, details);
    console.log("res", res);
    if (res.status === 200) {
      alert("mail sent successfully");
    } else {
      alert("something went wrong...try again");
    }
    resetForm(false);
    setSubmitting(false)
  }

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }else if (!/^[a-zA-Z]+ [a-zA-Z]+ |[a-zA-Z]+$/i.test(values.name)){
    errors.name = 'only characters are allowed'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }
  if (!values.projectDesc) {
    errors.projectDesc = 'Required'
  }
  return errors
}

function GetinTouch() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  return (
    <div className={classes['touch']} id='GetInTouch'>

      <div className={classes["container"]}>
        <div className={classes["form-container"]}>

        <div className={classes["left-container"]}>
            <div className={classes["left-inner-container"]}>

              <div className={classes["direct-contact-container"]}>

                <ul className={classes["contact-list"]}>

                  <li className={classes["list-item"]}>
                    <img src={Location} className={classes["imgg1"]} height={300}></img>
                    <span className={classes["contact-text location"]}>
                      <br />
                      <p className={classes['address']}>41, 4th Floor A-Wing, Todi Industrial Estate, Sun Mill Compound, Lower <br />Parel, Mumbai - 400013</p>
                    </span>
                  </li>

                  <li className={classes["list-item"]}>
                    <img src={mail} className={classes["imgg"]}></img>
                    <span className={classes["contact-text email"]}>
                      <br/>
                      <p className={classes['address']}>&nbsp; enquiry@nimapinfotech.com</p>
                    </span>
                  </li>

                  <li className={classes["list-item"]}>
                    <img src={mail} className={classes["imgg"]}></img>
                    <span className={classes["contact-text email"]}>
                      <br/>
                      <p className={classes['address']}>&nbsp; sales@nimapinfotech.com</p>
                    </span>
                  </li>

                  <li className={classes["list-item"]}>
                    <img src={indiaflag} className={classes["imgg"]}></img>
                    <span className={classes["contact-indiaflag"]}>
                      <br/>
                      <p className={classes['address']}>&nbsp; Mumbai | Headquarter <br/> +91 7304121292</p>
                    </span>
                  </li>

                  <li className={classes["list-item"]}>
                    <img src={indiaflag} className={classes["imgg"]}></img>
                    <span className={classes["contact-indiaflag"]}>
                      <br/>
                      <p className={classes['address']}>&nbsp; Pune | Branch Office <br/> +91 7304121292</p>
                    </span></li>

                    <li className={classes["list-item"]}>
                    <img src={UAEflag} className={classes["imgg"]}></img>
                    <span className={classes["contact-indiaflag"]}>
                      <br/>
                      <p className={classes['address']}>&nbsp; UAE | Branch Office <br/> +1 650 763 2218</p>
                    </span></li>

                </ul>


              </div></div></div>

          <div className={classes['right-container']}>
            <div className={classes["right-inner-container"]}>
              <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} className='getform'>
                <h1>Get In Touch</h1>
                <br/>
                <p className={classes["lg-view"]}>Feel free  to drop us a line below!</p>

                <input
                  className={classes['fillsome']}
                  type="text"
                  id='name'
                  name='name'
                  placeholder="Your Name "
                  maxLength={25}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? <div className={classes['errors']}>{formik.errors.name}</div> : null}

                <input
                  className={classes['fillsome']}
                  type='email'
                  id='email'
                  name='email'
                  placeholder="Your Email"
                  maxLength={30}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <div className={classes['errors']}>{formik.errors.email}</div> : null}

                <textarea
                  className={classes['fillsome']}
                  type='text'
                  id='textarea'
                  name='projectDesc'
                  placeholder="Typing your message here..."
                  rows="4"
                  maxLength={500}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.projectDesc}></textarea>
                {formik.touched.projectDesc && formik.errors.projectDesc ? <div className={classes['errors']}>{formik.errors.projectDesc}</div> : null}

                {/* <div className={classes["err2"]} >
                  {!formik.isValid ? "All fields are mendatory" : ""}
                </div> */}
                <button type='submit' className={classes['tchbtn']}>
                  SUBMIT</button>
              </form>
            </div>
          </div>

         
        </div></div></div>
  )
}
export default GetinTouch;
