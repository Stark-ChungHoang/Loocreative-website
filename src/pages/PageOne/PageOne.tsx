import React, { useEffect } from 'react'
import './pageOne.scss';
import { gsap } from "gsap";
function PageOne() {
   useEffect(()=> {
    const title = document.querySelector('h1');
    const navLink = document.querySelectorAll('.list-items');
    const revealAnim = () => {
        const TLFade = gsap.timeline();
        TLFade
        .from(title, {autoAlpha: 0,y: -80 ,delay: 0.2,duration: 0.4})
        .from(navLink,{autoAlpha: 0, x: -120,duration:0.4, 
        stagger: 0.1}, '-=0.2')
    }
    window.addEventListener('load',revealAnim)
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
           </div>
        </div>
    )
}

export default PageOne
