import React, { useState } from "react";
import Time from "../../components/Time";
import "./pageOne.scss";
const UrlLogo =
  "data:image/png;base64,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";
const PageOne = () => {
  return (
    <div className="page-one">
      <div className="page-one-content">
        <div className="inner-content">
          <div className="page-one-background"></div>
          <div className="first_">
            <div className="md-text">
              <div className="logo">
                <img src={UrlLogo} alt="logo" />
              </div>
              <br />
              LOOK
              <br />
              CREATIVELY.
            </div>
            <div className="portfolio">
              <a href="/">
                <div className="contents">
                  VIEW WORK<p className="hoverContents"></p>
                </div>
              </a>
            </div>
            <p className="time-text">
              <div>Time is our only limitation.</div>
              <span className="time-num">
                <Time />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
