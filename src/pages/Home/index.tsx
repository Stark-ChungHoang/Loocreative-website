import { useEffect, useState } from "react";
import PageOne from "./PageOne/PageOne";
import PageTwo from "./PageTwo/PageTwo";
import PageThree from "./PageThree/PageThree";
import PageFourth from "./PageFourth/PageFourth";
import PageFive from "./PageFive/PageFive";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  // set change URL khen scrolling
  let navigate = useNavigate();
  const [activeUrl, setActiveUrl] = useState<Number>(0);
  const handleUrl = () => {
    switch (activeUrl) {
      case 0:
        navigate("#firstPage");
        break;
      case 1:
        navigate("#secondPage");
        break;
      case 2:
        navigate("#thirdPage");
        break;
      case 3:
        navigate("#fourthPage");
        break;
      case 4:
        navigate("#fifthPage");
        break;
    }
  };
  useEffect(() => {
    handleUrl();
  }, [activeUrl]);

  //set up animation scroll to section
  useEffect(() => {
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 } as any;
    var supportsPassive = false;

    function preventDefault(e: any) {
      e.preventDefault();
    }
    var wheelOpt = supportsPassive ? { passive: false } : false as any;

    function preventDefaultForScrollKeys(e: any) {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel' as any;

    function disableScroll() {
      window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
      window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    function enableScroll() {
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener('touchmove', preventDefault, wheelOpt);
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    var settingUp = true;
    var buttonClicked = false;

    function goToSection(i: number) {
      gsap.set("body", { overflow: "hidden" });

      gsap.to("body", {
        scrollTo: { y: i * window.innerHeight, autoKill: true },
        duration: 0.5,
        onComplete: () => {
          gsap.set("body", { overflow: "auto" });
          buttonClicked = false;
          setActiveUrl(i);
        },
      });
    }
    const instances = [];
    gsap.utils.toArray("section").forEach((panel: any, i: any) => {
      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => {
            if (!buttonClicked && !settingUp) {
              goToSection(i);
              disableScroll();
            }
          },
          onLeave: () => {
            enableScroll();
          },
          onLeaveBack: () => {
            enableScroll();
          }
        })
      );

      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          start: "bottom bottom",
          onEnterBack: () => {
            if (!buttonClicked && !settingUp) {
              disableScroll();
              goToSection(i);
            }
          },
        })
      );
    });
    // set up function for menu_nav
    gsap.utils.toArray(".buttonNav").forEach((btn: any, i: any) => {
      btn.onclick = () => {
        if (!buttonClicked) {
          buttonClicked = true;
          goToSection(i);
        }
      };
    });
    settingUp = false;
    return (() => { buttonClicked = true; });
  }, []);

  //variable for array menu_nav
  let array: any[];
  array = Array(5).fill(0);
  return (
    <>
      <section>
        <PageOne />
      </section>
      <section>
        <PageTwo />
      </section>
      <section>
        <PageThree />
      </section>
      <section>
        <PageFourth />
      </section>
      <section>
        <PageFive />
      </section>
      <nav className="menu_nav">
        {array.map((item, index) => (
          <button
            key={index + item}
            className={`${activeUrl === index ? "active buttonNav" : "buttonNav"
              }`}
          ></button>
        ))}
      </nav>
    </>
  );
}

export default Home;
