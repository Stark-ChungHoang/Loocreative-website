import { useEffect } from 'react';
import './pageThree.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(ScrollTrigger);
function PageThree() {
    const { t } = useTranslation();

    useEffect(() => {
        const title_first = document.querySelector('.title_first');
        const title_second = document.querySelector('.title_second');
        const title_third = document.querySelector('.title_third');
        const title_fourth = document.querySelector('.title_fourth');
        const revealAnim = () => {
            const TLFade = gsap.timeline({
                scrollTrigger: {
                    trigger: ".page-three",
                    start: "top top+=5",
                    end: "bottom bottom-=50",
                    toggleActions: "restart reverse restart reverse",
                }
            });
            TLFade
                .from(title_first, {
                    autoAlpha: 0,
                    y: 220,
                    duration: .5,
                    ease: "power2.out",
                }, "-=0.2")
                .from(title_second, { autoAlpha: 0, y: -220, duration: .5, ease: "power2.out" }, "-=0.2")
                .from(title_third, { autoAlpha: 0, y: 220, duration: .5, ease: "power2.out" }, "-=0.2")
                .from(title_fourth, { autoAlpha: 0, y: -220, duration: .5, ease: "power2.out" });
        };

        revealAnim();
    }, []);
    return (
        <div className="page-three">
            <div className="page-three-container">
                <div className="page-three-content">
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_first">Motion</p>
                            <p className="desc">
                                {t("home.thirdPage.motion.text")}
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <p className="title title_second">Design</p>
                            <p className="desc">
                                {t("home.thirdPage.design.text")}
                            </p>
                        </div>
                    </div><div className="item">
                        <div className="item-content">
                            <p className="title title_third">Develop</p>
                            <p className="desc">
                                {t("home.thirdPage.develop.text")}

                            </p>
                        </div>
                    </div><div className="item">
                        <div className="item-content">
                            <p className="title title_fourth">Culture</p>
                            <p className="desc">
                                {t("home.thirdPage.culture.text")}

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageThree;
