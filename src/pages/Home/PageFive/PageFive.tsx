import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./pageFive.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function PageFive() {
  useEffect(() => {
    const blockItems = document.querySelectorAll(".fifth-name");
    const contact = document.querySelectorAll(".fifth-contact");
    const title = document.querySelector(".fifth-title");

    const revealAnim = () => {
      const TLFade = gsap.timeline({
        scrollTrigger: {
          trigger: ".page-five",
          start: "top top+=5",
          end: "bottom bottom-=50",
          toggleActions: "restart reverse restart reverse",
        },
      });
      TLFade.from(blockItems, {
        autoAlpha: 0,
        x: 420,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      },"-=0.3")
        .from(contact, {
          autoAlpha: 0,
          x: -220,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(title, {
          autoAlpha: 0,
          y: -220,
          duration: 0.6,
          ease: "power2.out",
        });
    };

    revealAnim();
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <div className="page-five">
      {/* {t("navbar.address")} */}
      <div className="fifth-container">
        <div className="fifth-title">
          <h5>
            LOOCREATIVE <br /> creative partner
          </h5>
        </div>
        <div className="fifth-wrapper">
          <div className="block-item">
            <h3 className="fifth-name">Partnership.</h3>
            <div className="email">
              <a className="fifth-contact" href="mailto:loocreative@playlooc.com">
                <p>loocreative@playlooc.com</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
          <div className="block-item">
            <h3 className="fifth-name">Recruiting.</h3>
            <div className="email">
              <a className="fifth-contact" href="mailto:loocreative@playlooc.com">
                <p>loocreative@playlooc.com</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
          <div className="block-item">
            <h3 className="fifth-name">Learn more.</h3>
            <div className="learn-more">
              <a className="fifth-contact" href="#">Learn more about us.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFive;
