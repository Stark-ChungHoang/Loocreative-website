import "fullpage.js/vendors/scrolloverflow";
import { useEffect, useState } from "react";
import PageOne from "./PageOne/PageOne";
import PageTwo from "./PageTwo/PageTwo";
import PageThree from "./PageThree/PageThree";
import PageFourth from "./PageFourth/PageFourth";
import PageFive from "./PageFive/PageFive";
import ReactFullpage from "@fullpage/react-fullpage";



const fullpageOptions = {
  anchors: ["firstPage", "secondPage", "thirdPage"],
  sectionsColor: ["#282c34", "#ff5f45", "#0798ec"],
  callbacks: ["onLeave", "afterLoad"],
  scrollOverflow: true
};

function Home() {
  return (
    <ReactFullpage
      licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
      {...fullpageOptions}
      scrollOverflow={true}
      navigation={true}
      navigationPosition={'right'}
      normalScrollElements={'.vail'}

      render={({ state, fullpageApi }: { state: any, fullpageApi: any; }) => {
        return (
          <div>
            <section className="section">
              <PageOne />
            </section>
            <section className="section">
              <PageTwo />
            </section>
            <section className="section">
              <PageThree />
            </section>
            <section className="section">
              <PageFourth />
            </section>
            <section className="section">
              <PageFive />
            </section>

          </div>
        );
      }}
    />
  );
}

export default Home;
