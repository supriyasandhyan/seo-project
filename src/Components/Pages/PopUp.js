import React from "react";
import axios from 'axios';
import { useFormik } from 'formik';
import classes from './CSS/Home.module.css';
import Nimap from '../../Image/Nimap.png';


const initialValues = {
    name: '',
    email: '',
    mobile: '',
}

const onSubmit=async (data, { setSubmitting,resetForm }) => {
    let details = {
      name: data.name,
      email: data.email,
      mobile: "",
    };

    // const url = "https://raaslanding.nimapinfotech.com/api/mail?from=360";
    // const url = "http://localhost:4800/api/mail?from=360"
    const url = "http://144.91.79.237:8909/api/mail?from=360"

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
        errors.name = 'Name is Required'
    }
    if (!values.email) {
        errors.email = 'Email is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email format'
    }
    if (!values.mobile) {
        errors.mobile = 'Mobile Number Required'
    } else if (!/^[0-9]/i.test(values.mobile)) {
        errors.mobile = 'Please Enter Valid Mobile Number'
    }
    return errors
}

const PopUp = ({ show, onClose, children }) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    
    if (!show) {
        return null;
    }
    

    return (
        <div className={classes["modalWrapper"]}>
            <div className={classes['modal']}>
                <button onClick={onClose} className={`${classes['btnClose']} btn-close`} />
                {/* {children} */}
                <img src={Nimap} className={classes['pop-img']}/>
                <h1 className={classes['pop-h1']}>Thank You For Your Interest</h1>
                <p className={classes['pop-p']}>
                    Have a Query? Get it cleared in few minutes!<br/>
                    Drop here your details and we will get back to you ASAP!
                </p>
                <form className={classes['pop-form']} onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
                    <input
                        className={classes['pop-input']}
                        type="text"
                        id='name'
                        name='name'
                        placeholder="Enter Your Name "
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ? <div className={classes['errors']}>{formik.errors.name}</div> : null}

                    <input
                        className={classes['pop-input']}
                        type='email'
                        id='email'
                        name='email'
                        placeholder="Enter Your Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <div className={classes['errors']}>{formik.errors.email}</div> : null}

                    <input
                        className={classes['pop-input']}
                        placeholder="Enter Your Mobile Number"
                        type='mobile'
                        id='mobile'
                        name='mobile'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobile} />
                    {formik.touched.mobile && formik.errors.mobile ? <div className={classes['errors']}>{formik.errors.mobile}</div> : null}

                    <button type='submit' disabled={!formik.isValid || formik.isSubmitting || !formik.dirty} className={classes['pop-btn']}>
                        Enquire</button>
                </form>

                <div className={classes['CallUs']}>
                <div className={classes['num1']}>
                    <p>SALES</p>
                    <h4>+917021431876</h4>
                </div>
                <div className={classes['num1']}>
                   <p>WHATSAPP</p>
                   <h4>+919819312721</h4>
                </div>
                </div>

            </div>
        </div>
    );
};

export default PopUp;

