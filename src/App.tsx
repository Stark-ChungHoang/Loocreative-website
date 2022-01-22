import { ElementRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import "./App.css";
import {
  PageOne,
  PageTwo,
  PageThree,
  PageFourth,
  PageFive,
} from "./pages/index";
import NavBar from "./components/NavBar";
import MenuNav from "./components/MenuNav";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  // history v6
  let navigate = useNavigate();

  //function scroll to section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const scrolling = {
      enabled: true,
      events: "scroll,wheel,touchmove,pointermove".split(","),
      prevent: (e: any) => e.preventDefault(),
      disable() {
        if (scrolling.enabled) {
          scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, {
            passive: true,
          });
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
    function goToSection(section: any, anim: any) {
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
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () => {
          goToSection(section, intoAnim);
        },
        onEnterBack: () => {
          goToSection(section, intoAnim);
        },
      });
    });
  }, []);


  return (
    <>
      <section id="page-one">
        <PageOne />
      </section>
      <section id="page-two">
        <PageTwo />
      </section>
      <section id="page-three">
        <PageThree />
      </section>
      <section id="page-four">
        <PageFourth />
      </section>
      <section id="page-five">
        <PageFive />
      </section>
      <MenuNav />

      <NavBar />
    </>
  );
}

export default App;
