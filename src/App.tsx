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
  const handleActiveMenuNav = (dataPage: string) => {
    const listNav = document.querySelectorAll<HTMLElement>(".menu_nav > div");
    const listNavArray = Array.from(listNav);
    listNavArray.forEach((item) => {
      if (item.getAttribute("data-page") === dataPage) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  const handleScroll = (e: Event) => {
    const scrollY = window.scrollY;
    const pageTwoOffset = document.querySelector<HTMLElement>("#page-two")?.offsetTop;
    const pageThreeOffset = document.querySelector<HTMLElement>("#page-three")?.offsetTop;
    const pageFourOffset = document.querySelector<HTMLElement>("#page-four")?.offsetTop;
    const pageFiveOffset = document.querySelector<HTMLElement>("#page-five")?.offsetTop;
    if (pageTwoOffset && pageThreeOffset && pageFourOffset && pageFiveOffset) {
      if (scrollY < pageTwoOffset) {
        window.location.hash = "#firstPage";
        handleActiveMenuNav("firstPage");
      } else if (scrollY < pageThreeOffset) {
        handleActiveMenuNav("secondPage");
        window.location.hash = "#secondPage";
      } else if (scrollY < pageFourOffset) {
        window.location.hash = "#thirdPage";
        handleActiveMenuNav("thirdPage");
      } else if (scrollY < pageFiveOffset) {
        handleActiveMenuNav("fourthPage");
        window.location.hash = "#fourthPage";
      } else if (scrollY >= pageFiveOffset) {
        handleActiveMenuNav("fifthPage");
        window.location.hash = "#fifthPage";
      }
    }
  };
  const handleScrollMemo = useMemo(() => handleScroll, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollMemo);

  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScrollMemo);
    };
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
      <nav className="menu_nav">
        <div data-page="firstPage" onClick={() => {
          window.scroll(0, 0);
          handleActiveMenuNav("firstPage");
        }} > </div>
        <div data-page="secondPage" onClick={() => {
          const pageTwoOffset = document.querySelector<HTMLElement>("#page-two")?.offsetTop;
          if (pageTwoOffset) {
            window.scroll(0, pageTwoOffset);
            handleActiveMenuNav("secondPage");
          }
        }} > </div>
        <div data-page="thirdPage" onClick={() => {
          const pageThreeOffset = document.querySelector<HTMLElement>("#page-three")?.offsetTop;
          if (pageThreeOffset) {
            window.scroll(0, pageThreeOffset);
            handleActiveMenuNav("thirdPage");
          }
        }} > </div>
        <div data-page="fourthPage" onClick={() => {
          const pageFourOffset = document.querySelector<HTMLElement>("#page-four")?.offsetTop;
          if (pageFourOffset) {
            window.scroll(0, pageFourOffset);
            handleActiveMenuNav("fourthPage");
          }
        }} > </div>
        <div data-page="fifthPage" onClick={() => {
          const pageFiveOffset = document.querySelector<HTMLElement>("#page-five")?.offsetTop;
          if (pageFiveOffset) {
            window.scroll(0, pageFiveOffset);
            handleActiveMenuNav("fifthPage");
          }
        }}> </div>
      </nav>

    </>
  );
}

export default App;
