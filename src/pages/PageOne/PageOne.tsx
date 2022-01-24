import React, { useEffect } from 'react'
import './pageOne.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function PageOne() {
   useEffect(()=> {
    const title = document.querySelector('h1');
    const navLink = document.querySelectorAll('.list-items');
    
    const revealAnim = () => {
        const TLFade = gsap.timeline({
            scrollTrigger: {
                trigger: ".page-one",
                start: "top bottom+=50",
                 end: "bottom bottom-=50",
                toggleActions: "restart reverse restart none",
            }
        });
        TLFade
        .from(title, {
            autoAlpha: 0,
            y: -220 ,
            duration:.5,
            ease: "power2.out",
           },"-=0.1")
        .from(navLink,{autoAlpha: 0, x: -420,duration:.8,ease: "power2.out"})
        .to(navLink,{ x: -window.innerWidth*70/100  / 5,duration:.5,ease: "power2.out"})
    }
  
 revealAnim()
   },[])
    
    return (
        <div className="page-one">
           <h1>History</h1>
           <div className="list">
               <div className="list-items">
                   <h5>chunghoang</h5>
                   <p>justin bieber</p>
               </div>
               <div className="list-items">
                   <h5>chunghoang</h5>
                   <p>justin bieber</p>
               </div>
               <div className="list-items">
                   <h5>chunghoang</h5>
                   <p>justin bieber</p>
               </div>
               <div className="list-items">
                   <h5>chunghoang</h5>
                   <p>justin bieber</p>
               </div>
               <div className="list-items">
                   <h5>chunghoang</h5>
                   <p>justin bieber</p>
               </div>
              
           </div>
        </div>
    )
}

export default PageOne
