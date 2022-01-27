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
  {...fullpageOptions}
    scrollOverflow={true}
    navigation= {true}
    // slidesNavigation={true}

	navigationPosition={'right'}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec", "red"]}
    normalScrollElements={ '.vail'}

    render={({ state, fullpageApi }) => {
      console.log(state,fullpageApi)
      return (
        <div>
          <div className="section fp-noscroll">
            <div className="vail" style={{height: 300, width: 300, overflow:"auto"}} onScrollCapture={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
            }} onScroll={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              console.log(e)

              fullpageApi.setAllowScrolling(false);
            }}
            onMouseMove={(e) => {

              // fullpageApi.destroy();
            }}
            onMouseLeave={(e) => {
              fullpageApi.setAllowScrolling(true);


            }}

            >
              <div style={{height: 700, width: 300, background: "red"}}></div>
            </div>
          </div>
          <div className="section">
          <div style={{height: 300, width: 300, overflow:"auto"}} onScroll={(e) => {
              console.log(e)
              e.preventDefault();
              e.stopPropagation();
            }}>
              <div style={{height: 700, width: 300, background: "red"}}></div>
            </div>
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
