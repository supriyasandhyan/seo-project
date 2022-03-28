import React, { useState } from 'react'
import classes from './CSS/Faq.module.css';
function Faq() {
    const [open1, setOpen1] = useState('accordion-content1')
    const [open2, setOpen2] = useState('accordion-content1')
    const [open3, setOpen3] = useState('accordion-content1')
    const [open4, setOpen4] = useState('accordion-content1')
    const [open5, setOpen5] = useState('accordion-content1')
    const [open6, setOpen6] = useState('accordion-content1')
    const [open7, setOpen7] = useState('accordion-content1')
    const [iconColor1, seticonColor1] = useState('fas fa-plus-circle')
    const [iconColor2, seticonColor2] = useState('fas fa-plus-circle')
    const [iconColor3, seticonColor3] = useState('fas fa-plus-circle')
    const [iconColor4, seticonColor4] = useState('fas fa-plus-circle')
    const [iconColor5, seticonColor5] = useState('fas fa-plus-circle')
    const [iconColor6, seticonColor6] = useState('fas fa-plus-circle')
    const [iconColor7, seticonColor7] = useState('fas fa-plus-circle')



    const hide1 = () => {
        if (open1 === 'accordion-content1') {
            setOpen1('accordion-content')
            seticonColor1('fas fa-minus-circle')
        } else {
            setOpen1('accordion-content1')
            seticonColor1('fas fa-plus-circle')
        }
    }

    const hide2 = () => {
        if (open2 === 'accordion-content1') {
            setOpen2('accordion-content')
            seticonColor2('fas fa-minus-circle')
        } else {
            setOpen2('accordion-content1')
            seticonColor2('fas fa-plus-circle')
        }
    }

    const hide3 = () => {
        if (open3 === 'accordion-content1') {
            setOpen3('accordion-content')
            seticonColor3('fas fa-minus-circle')
        } else {
            setOpen3('accordion-content1')
            seticonColor3('fas fa-plus-circle')
        }
    }

    const hide4 = () => {
        if (open4 === 'accordion-content1') {
            setOpen4('accordion-content')
            seticonColor4('fas fa-minus-circle')
        } else {
            setOpen4('accordion-content1')
            seticonColor4('fas fa-plus-circle')
        }
    }

    const hide5 = () => {
        if (open5 === 'accordion-content1') {
            setOpen5('accordion-content')
            seticonColor5('fas fa-minus-circle')
        } else {
            setOpen5('accordion-content1')
            seticonColor5('fas fa-plus-circle')
        }
    }

    const hide6 = () => {
        if (open6 === 'accordion-content1') {
            setOpen6('accordion-content')
            seticonColor6('fas fa-minus-circle')
        } else {
            setOpen6('accordion-content1')
            seticonColor6('fas fa-plus-circle')
        }
    }
    const hide7 = () => {
        if (open7 === 'accordion-content1') {
            setOpen7('accordion-content')
            seticonColor7('fas fa-minus-circle')
        } else {
            setOpen7('accordion-content1')
            seticonColor7('fas fa-plus-circle')
        }
    }
    return (
        <div className={classes['Faq']}>
            <h1 className={classes['faqh1']}>FAQ</h1>
            <p className={classes['faqp']}>Frequently asked questions</p>


            <div className={classes["accordion"]}>
                <div className={classes["accordion-item"]}>

                    <div className={classes["symbol"]}>
                        <h2 id="accordion-button-1" aria-expanded="false">
                            <span className={classes["accordion-title"]}>
                                1. What Are The Steps To Outsource SEO Services?
                            </span>
                        </h2>
                        <i className={iconColor1} onClick={hide1} style={{ color: '#4DB8EF' }}></i>
                    </div>
                    <div className={classes[open1]}>
                        <p>In Nimap, we allow you to have a thorough interview process and hire the dedicated professional of your choice. </p>
                    </div>
                </div>

                <div className={classes["accordion-item"]}>
                    <div className={classes["symbol"]}>
                        <h2 id="accordion-button-1" aria-expanded="false">
                            <span className={classes["accordion-title"]}>
                                2. Why Hire Dedicated SEO Professional?
                            </span>
                        </h2><i className={iconColor2} onClick={hide2} style={{ color: '#4DB8EF' }}></i></div>
                    <div className={classes[open2]}>
                        <p>Altogether We provide you trained and experienced dedicated digital marketing professional for hire with the reasonable pricing model </p>
                    </div>
                </div>

                <div className={classes["accordion-item"]}>
                    <div className={classes["symbol"]}>
                        <h2 id="accordion-button-1" aria-expanded="false">
                            <span className={classes["accordion-title"]}>
                                3. How Can I Monitor And Analyse Digital Marketing Performance?
                            </span>
                        </h2><i className={iconColor3} onClick={hide3} style={{ color: '#4DB8EF' }}></i></div>
                    <div className={classes[open3]}>
                        <p>Client can get daily performance report of digital marketing on weekly/monthly or quarterly basis. </p>
                        <p>We track our digital marketing activity performances on regular basis.</p>
                    </div>
                </div>

                <div className={classes["accordion-item"]}>
                    <div className={classes["symbol"]}>
                        <h2 id="accordion-button-1" aria-expanded="false">
                            <span className={classes["accordion-title"]}>
                                4. Can I Hire Your Professionals For Permanent Job?
                            </span>
                        </h2><i className={iconColor4} onClick={hide4} style={{ color: '#4DB8EF' }}></i></div>
                    <div className={classes[open4]}>
                        <p>Yes, as per the requirement one can hire digital marketing professionals for permanent basis. </p>
                        <p>Altogether Nimap also offers onshore as well as offshore professionals as per your requirements. </p>
                    </div>
                </div>

                <div className={classes["accordion-item"]}>
                    <div className={classes["symbol"]}>
                        <h2 id="accordion-button-1" aria-expanded="false">
                            <span className={classes["accordion-title"]}>
                                5. What Are The Steps For Outsourcing Seo Services / Professionals From Nimap
                            </span>
                        </h2><i className={iconColor5} onClick={hide5} style={{ color: '#4DB8EF' }}></i></div>
                    <div className={classes[open5]}>
                        <p>Enquiry &minus;&gt; Interview &minus;&gt; Select Professionals &minus;&gt; Hire and add professionals to team. </p>
                    </div>
                </div>

                <div className={classes["accordion-item"]}>
                    <div className={classes["symbol"]}>
                        <h2 id="accordion-button-1" aria-expanded="false">
                            <span className={classes["accordion-title"]}>
                                6. What Kind Of Supports I Can Expect From Nimap?
                            </span>
                        </h2><i className={iconColor6} onClick={hide6} style={{ color: '#4DB8EF' }}></i></div>
                    <div className={classes[open6]}>
                        <p>Nimap appoint dedicated project manager to monitor digital marketing executives and to be a point of contact for any requirements </p>
                        {/* <p>and hire the dedicated developer of your choices.</p> */}
                    </div>
                </div>

                <div className={classes["accordion-item"]}>
                    <div className={classes["symbol"]}>
                        <h2 id="accordion-button-1" aria-expanded="false">
                            <span className={classes["accordion-title"]}>
                                7. Do You Offer Marketing Services?
                            </span>
                        </h2><i className={iconColor7} onClick={hide7} style={{ color: '#4DB8EF' }}></i></div>
                    <div className={classes[open7]}>
                        <p>Yes, In Nimap we also provide Marketing service as per requirement such as SEO, Social media Marketing, </p>
                        <p>Adwords, PPC campaign, Lead generation campaigns, media buying, and planning, etc.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Faq;
