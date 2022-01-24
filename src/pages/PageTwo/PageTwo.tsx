import {useEffect} from 'react';
import './pageTwo.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function PageTwo() {
    useEffect(()=> {
        const title = document.querySelector('.par_one');
        const text = document.querySelector('.text_wr');
        const revealAnim = () => {
            const TLFade = gsap.timeline({
                scrollTrigger: {
                    trigger: ".page-two",
                    start: "top top+=5",
                     end: "bottom bottom-=50",
                    //  onEnter: ()=> console.log("enter"),
                    //  onLeave: ()=> console.log("leave"),
                    //  onEnterBack: ()=> console.log("enter back"),
                    //  onLeaveBack: ()=> console.log("leave Back"),
                    toggleActions: "restart reverse restart reverse",
                }
            });
            TLFade
            .from(title, {
                autoAlpha: 0,
                y: -20 ,
                duration:.6,
                ease: "power4.out",
               },"-=0.1")
            .from(text,{autoAlpha: 0, x: -380,duration:1,ease: "power2.out"})
        }
      
     revealAnim()
       },[])
    return (
        <div className="page-two">
            <div className="page-two-content">
                <div className="brand_name_wr">
                    <p className="par_one">LOOCREATIVE<br />PHILOSOPHY </p>
                </div>
                <div className="text_wr"><p>Dreams come true
                    <br />Without that possibility,
                    <br />Nature would not incite
                    <br />us to have them.</p>
                </div>
            </div>
        </div>

    );
}

export default PageTwo;
