import React from "react";
import Benefit from "../../Image/Benefit.svg";
import classes from "./CSS/Benefits.module.css";

export default function Benefits() {
  return (
    <div className={classes["benefits"]} id="BeNeFiTs">
      <div className={classes["bb"]}>
        <img className={classes["benefit-img"]} src={Benefit} />
      </div>

      <div className={classes["cc"]}>
        <div className={classes["cc11"]}>
          <h1 className={classes["CCh1"]}>
            Why Outsource</h1>
            <h1 className={classes["CCh2"]}>
            LEAD GENERATION?
            </h1>
          
        </div>
        <div className={classes["cc22"]}>
          <p className={classes["cc-para"]}>
            Strategic SEO will help you increase your organic leads. Our SEO
            experts by following a streamlined project management process will
            generate organic qualified leads daily without paying Search
            Engines.
          </p>
        </div>
      </div>

    </div>
  );
}
