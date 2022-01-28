import { isMobile } from "react-device-detect";
import { gsap } from "gsap";

const afterLoad = (origin: any, destination: any, direction: any) => {

  switch (destination.index) {
    case 1:
      gsap.from(".par_one", {
        autoAlpha: 0,
        y: -380,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".text_wr", {
        autoAlpha: 0,
        x: -380,
        duration: 1,
        ease: "power4.out",
        delay: 0.3,
      });
      break;
    case 2:
      gsap.from(".title_first", {
        autoAlpha: 0,
        y: 420,
        duration: 0.7,
        ease: "power4.out",
      });
      gsap.from(".title_second", {
        autoAlpha: 0,
        y: -420,
        duration: 0.7,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".title_third", {
        autoAlpha: 0,
        y: 420,
        duration: 0.7,
        ease: "power4.out",
        delay: 0.6,
      });
      gsap.from(".title_fourth", {
        autoAlpha: 0,
        y: -420,
        duration: 0.7,
        ease: "power4.out",
        delay: 0.9,
      });
      break;
    case 3:
      gsap.from(".fourth-title", {
        autoAlpha: 0,
        y: -220,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".list-history", {
        autoAlpha: 0,
        x: -420,
        duration: 0.7,
        ease: "power4.out",
        delay: 0.3,
      });
      if (!isMobile) {
        gsap.to(".slick-track", {
          x: (-window.innerWidth * 70) / 100 / 4,
          duration: 0.5,
          ease: "power2.out",
          delay: 1,
        });
      }
      break;
    case 4:
      gsap.from(".fifth-name", {
        autoAlpha: 0,
        y: 420,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
      });
      gsap.from(".fifth-contact", {
        autoAlpha: 0,
        x: -220,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        delay: 1,
      });
      gsap.from(".fifth-title", {
        autoAlpha: 0,
        y: -220,
        duration: 0.7,
        ease: "power4.out",
        delay: 1.4,
      });
      break;
  }
};
export default afterLoad;
