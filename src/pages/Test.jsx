/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";

const fullpageOptions = {
  anchors: ["firstPage", "secondPage", "thirdPage"],
  sectionsColor: ["#282c34", "#ff5f45", "#0798ec"],
  callbacks: ["onLeave", "afterLoad"],
  scrollOverflow: true
};

const FullpageWrapper = fullpageProps => (
  <ReactFullpage
  licenseKey = {'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
   
    scrollOverflow={true}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <div className="section">1</div>
          <div className="section">
            <div style={{ height: "150vh",color: "blue" }}>2</div>
          </div>
          <div className="section">3</div>
          <div className="section">4</div>
          <div className="section">5</div>
        </div>
      );
    }}
  />
);

export default FullpageWrapper;
