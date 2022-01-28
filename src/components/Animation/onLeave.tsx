import { isMobile } from "react-device-detect";
import { gsap } from "gsap";
const onLeave = (origin: any, destination: any, direction: any) => {

  switch (destination.index) {
    case 0:
      gsap.from(".md-text", {
        autoAlpha: 0,
        y: -980,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".contents", {
        autoAlpha: 0,
        x: -280,
        duration: 1,
        ease: "power4.out",
        delay: 1,
      });
      gsap.from(".time-text", {
        autoAlpha: 0,
        x: -280,
        duration: 1,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.to(".text_wr", { visibility: "hidden" });
      gsap.to(".par_one", { visibility: "hidden" });
      break;
    case 1:
      gsap.to(".md-text", { visibility: "hidden" });
      gsap.to(".time-text", { visibility: "hidden" });
      gsap.to(".contents", { visibility: "hidden" });
      gsap.to(".title_first", { visibility: "hidden" });
      gsap.to(".title_second", { visibility: "hidden" });
      gsap.to(".title_third", { visibility: "hidden" });
      gsap.to(".title_fourth", { visibility: "hidden" });
      break;
    case 2:
      gsap.to(".text_wr", { visibility: "hidden" });
      gsap.to(".par_one", { visibility: "hidden" });
      gsap.to(".fourth-title", { visibility: "hidden" });
      gsap.to(".list-history", { visibility: "hidden" });
      if (!isMobile) {
        gsap.to(".slick-track", {
          x: 0,
        });
      }
      break;
    case 3:
      gsap.to(".title_first", { visibility: "hidden" });
      gsap.to(".title_second", { visibility: "hidden" });
      gsap.to(".title_third", { visibility: "hidden" });
      gsap.to(".title_fourth", { visibility: "hidden" });
      gsap.to(".fifth-name", { visibility: "hidden" });
      gsap.to(".fifth-contact", { visibility: "hidden" });
      gsap.to(".fifth-title", { visibility: "hidden" });
      break;
    case 4:
      gsap.to(".fourth-title", { visibility: "hidden" });
      gsap.to(".list-history", { visibility: "hidden" });
      if (!isMobile) {
        gsap.to(".slick-track", {
          x: 0,
        });
      }
  }
};
export default onLeave;
