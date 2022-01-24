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
    console.log(activeUrl);

    handleUrl();
  }, [activeUrl]);

  //set up animation scroll to section
  useEffect(() => {
    var settingUp = true;
    function goToSection(i: number) {
      gsap.set("body", { overflow: "hidden" });

      gsap.to("body", {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 0.4,
        onComplete: () => {
          gsap.set("body", { overflow: "auto" });
          buttonClicked = false;
          setActiveUrl(i);
        },
      });
    }
    var buttonClicked = false;
    const instances = [];
    gsap.utils.toArray("section").forEach((panel: any, i: any) => {
      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => {
            if (!buttonClicked && !settingUp) {
              goToSection(i);
            }
          },
        })
      );

      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          start: "bottom bottom",
          onEnterBack: () => {
            if (!buttonClicked && !settingUp) {
              goToSection(i);
            }
          },
        })
      );
    });
    // set up function for menu_nav
    gsap.utils.toArray("button").forEach((btn: any, i: any) => {
      btn.onclick = () => {
        if (!buttonClicked) {
          buttonClicked = true;
          goToSection(i);
        }
      };
    });
    settingUp = false;
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
            className={`${
              activeUrl === index ? "active buttonNav" : "buttonNav"
            }`}
          ></button>
        ))}
      </nav>
    </>
  );
}

export default Home;
