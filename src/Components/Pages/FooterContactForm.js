import React from 'react';
import axios from 'axios';
import classes from './CSS/Footer.module.css';
import { useFormik } from 'formik';

const initialValues = {
    name: '',
    email: '',
    mobile: '',
    projectDesc: '',
}

const onSubmit = async (data, { setSubmitting, resetForm }) => {
    let details = {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        projectDesc: data.projectDesc
       
    };
    console.log(details)

    // const url = "https://pmlanding.nimapinfotech.com/api/mail"; 
    // const url = "https://raaslanding.nimapinfotech.com/api/mail?from=350";
    const url = "http://localhost:4800/api/mail?from=350"


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
    if (!values.mobile) {
        errors.mobile = 'Required'
    } else if (!/^([0-9]{1,5})?([7-9][0-9]{9})$/i.test(values.mobile )) {
        errors.mobile = 'please enter valid number'
    }
    if (!values.projectDesc) {
        errors.projectDesc = 'Required'
    }
    return errors
}

export default function FooterContactForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <div className={classes["formcontainer"]}>

            <div className={classes["righttcontainerr"]}>
                <div className={classes["rightinnercontainer"]}>
                    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }}>
                        <div className={classes['frmtext']}>
                            <p className={classes["lgview1"]}>Are You Ready To Take<br />
                                <span className={classes['lgview2']}><b>Your Business To The Top?</b></span>
                            </p>

                            <div className={classes['chotapara']}>
                                <p className={classes['lgview3']}>
                                    <strong> 500s, when an unknown printer took a
                                        gallery of tyme and scrambled it to make
                                        a type specimen book </strong>
                                </p><div className={classes['lastpara']}></div></div>
                        </div>
                        <div className={classes['inputsfrm']}>
                            <input
                                className={classes['foot-input']}
                                type="text"
                                id='name'
                                name='name'
                                placeholder="Name"
                                maxLength={20}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name} />
                            {formik.touched.name && formik.errors.name ? <div className={classes['error']}>{formik.errors.name}</div> : null}


                            <input
                                className={classes['foot-input']}
                                placeholder="Email"
                                type='email'
                                id='email'
                                name='email'
                                maxLength={30}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} />
                            {formik.touched.email && formik.errors.email ? <div className={classes['error']}>{formik.errors.email}</div> : null}


                            <input
                                className={classes['foot-input']}
                                placeholder="Mobile"
                                type='mobile'
                                id='mobile'
                                name='mobile'
                                maxLength={12}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mobile} />
                            {formik.touched.mobile && formik.errors.mobile ? <div className={classes['error']}>{formik.errors.mobile}</div> : null}

                            <textarea
                                className={classes['foot-textarea']}
                                rows="4"
                                placeholder="Description"
                                type='text'
                                id='description'
                                name='projectDesc'
                                maxLength={500}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.projectDesc}></textarea>
                            {formik.touched.projectDesc && formik.errors.projectDesc ? <div className={classes['error']}>{formik.errors.projectDesc}</div> : null}


                            <br /> 
                            {/* <div className={classes["err"]} >
                                {!formik.isValid ? "Fill all the fields properly" : ""}
                            </div> */}
                            <button type='submit' disabled={!formik.isValid || formik.isSubmitting || !formik.dirty} className={classes['frmsubbtn']}>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}



