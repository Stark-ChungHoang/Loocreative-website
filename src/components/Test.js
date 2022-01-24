import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./test.scss";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
function Test() {
  const sections = document.querySelectorAll("section");
  const scrolling = {
    enabled: true,
    events: "scroll,wheel,touchmove,pointermove".split(","),
    prevent: (e) => e.preventDefault(),
    disable() {
      if (scrolling.enabled) {
        scrolling.enabled = false;
        window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
        scrolling.events.forEach((e, i) =>
          (i ? document : window).addEventListener(e, scrolling.prevent, {
            passive: false,
          })
        );
      }
    },
    enable() {
      if (!scrolling.enabled) {
        scrolling.enabled = true;
        window.removeEventListener("scroll", gsap.ticker.tick);
        scrolling.events.forEach((e, i) =>
          (i ? document : window).removeEventListener(e, scrolling.prevent)
        );
      }
    },
  };
  function goToSection(section, anim, i) {
    if (scrolling.enabled) {
      // skip if a scroll tween is in progress
      scrolling.disable();
      gsap.to(window, {
        scrollTo: { y: section, autoKill: false },
        onComplete: scrolling.enable,
        duration: 1,
      });

      anim && anim.restart();
    }
  }

  sections.forEach((section, i) => {
    const intoAnim = gsap.from(section.querySelector(".right-col"), {
      yPercent: 50,
      duration: 1,
      paused: true,
    });
    console.log(intoAnim);
    ScrollTrigger.create({
      trigger: section,
      start: "top bottom-=1",
      end: "bottom top+=1",
      onEnter: () => goToSection(section, intoAnim),
      onEnterBack: () => goToSection(section),
    });
  });
  useEffect(() => {
    goToSection();
  }, []);
  return (
      <></>
     );
}

export default Test;
