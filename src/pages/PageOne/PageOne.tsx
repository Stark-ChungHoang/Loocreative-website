import { useState,useEffect } from "react";
import Time from "../../components/Time";
import "./pageOne.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UrlLogo from "../../assets/images/logo.png";
gsap.registerPlugin(ScrollTrigger);

const UrlBackground =
  "https://player.vimeo.com/video/661908910?&amp;autoplay=1&amp;background=1&amp;loop=1&amp;byline=0&amp;title=0";

const PageOne = () => {
  const BackgroundVideo = () => (
    <div className="BackgroundVideo">
      <iframe className="Back" src={UrlBackground} title="bg-video" />
    </div>
  );
  useEffect(()=> {
    const title_first = document.querySelector('.md-text');
    const time = document.querySelector('.time-text');
    const content = document.querySelector('.contents');
    const revealAnim = () => {
        const TLFade = gsap.timeline({
          scrollTrigger: {
          trigger: ".page-one",
          start: "top bottom+=50",
           end: "bottom bottom-=50",
          toggleActions: "restart reverse restart none",
          }
        });
        TLFade
        .from(title_first, {
            autoAlpha: 0,
            y: -220 ,
            duration:.5,
            ease: "power2.out",
           },"-=0.2")
        .from(time,{autoAlpha: 0, x: -220,duration:.5,ease: "power2.out"},"-=0.1")
        .from(content,{autoAlpha: 0, x: -220,duration:.5,ease: "power2.out"})
    }
  
 revealAnim()
   },[])

  return (
    <div className="page-one">
      <div className="page-one-content">
        <div className="inner-content">
          <BackgroundVideo />
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
            <div className="time-text">
              <div>Time is our only limitation.</div>
              <span className="time-num">
                <Time />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
