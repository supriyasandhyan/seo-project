import React from 'react';
import classes from './CSS/Process.module.css';
import CurrentPositionEvaluation from '../../Image/CurrentPositionEvaluation.svg';
import HighTechnical from '../../Image/HighTechnical.svg';
import WebsiteTechnical from '../../Image/WebsiteTechnical.svg';
import WhitePure from '../../Image/WhitePure.svg';
import CompetitiveKeyword from '../../Image/CompetitiveKeyword.svg';
import Onpageseo from '../../Image/Onpageseo.svg';
import TechnicalseoLink from '../../Image/TechnicalseoLink.svg';
import Detailedreporting from '../../Image/Detailedreporting.svg';

function Process() {
    const cards = [{
        number: 1,
        img: CurrentPositionEvaluation,
        heading: 'Current Position Evaluation'
    },
    {
        number: 2,
        img: HighTechnical,
        heading: 'High Technical Proficiency & Domain Analysis'
    },
    {
        number: 3,
        img: WebsiteTechnical,
        heading: 'Website Technical Audit & Competitor Analysis'
    },
    {
        number: 4,
        img: WhitePure,
        heading: 'Pure WHITE-LABEL Techniques'
    },
    {
        number: 5,
        img: CompetitiveKeyword,
        heading: 'Competitive Keyword Research'
    },
    {
        number: 6,
        img: Onpageseo,
        heading: 'On-Page SEO + Unique Content Creation & Optimization'
    },
    {
        number: 7,
        img: TechnicalseoLink,
        heading: ' Technical SEO + Link Building'
    },
    {
        number: 8,
        img: Detailedreporting,
        heading: 'Detailed Reporting & ROI Calculatiom'
    },]

    return (
        <div className={classes['process']}>
            <h2 className={classes['process-h2']}><strong>The Process</strong></h2>
                <h1 className={classes['process-h1']}><strong>THAT SETS US APART</strong></h1>
            

        
            <div className={classes['newrow']}>
                {cards.map(el => (
                    <div className={classes["cardsss"]}>
                        <div className={classes["card1"]}>
                            <div className={classes["bg-brwn"]}>
                                <div className={classes["number"]}>
                                    <p className={classes['num-p']}>{el.number}</p>
                                </div>
                                <div className={classes["icon-with-circle"]}>
                                    <img src={el.img} height={30} />
                                </div>
                                <p className={classes["info-pro"]}>{el.heading}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {cards.map(el => (
                    <div className={classes["cardsss"]}>
                        <div className={classes["card1"]}>
                            <div className={classes["bg-brwn"]}>
                                <div className={classes["number"]}>
                                    <p className={classes['num-p']}>{el.number}</p>
                                </div>
                                <div className={classes["icon-with-circle"]}>
                                    <img src={el.img} height={30} />
                                </div>
                                <p className={classes["info-pro"]}>{el.heading}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <a href='#GetInTouch'>
                    <button className={classes['proc-btn']}>LET'S DISCUSS</button></a>
            </div>
        </div>
    )
}
export default Process;