import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./App.css";
import rocketLevel1 from "./assets/level1.png"
import rocketLevel2 from "./assets/level2.png"
import rocketLevel3 from "./assets/level3.png"
import rocketLevel4 from "./assets/level4.png"

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef(null);
  const slider = useRef(null);
  const rocket = useRef(null);
  const level1FallOf= useRef(null),level2FallOf= useRef(null),level3FallOf= useRef(null),level4FallOf= useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(rocket.current, {
        x: '100vw',
        y: '0vh',
        scale: 0.5,
        rotate: 100,
        ease: "ease.in",
          scrollTrigger: {
            trigger: slider.current,
            start: "top top",
            end: "+=500",
            scrub: 1,
            pin: true,
        }
      })

      gsap.to(level1FallOf.current, {
        x:'100vw',
        y: '0',  
        rotate: 360,
        scale: 0,
        ease: "bounce.out",
          scrollTrigger: {
            trigger: rocket.current,
            start: "top top",
            end: "+=100",
            scrub: 1,
            pin: true,
        }
      })
      gsap.to(level2FallOf.current, {
        x:'100vw',
        y: '0',  
        rotate: 60,
        scale: 0,
        ease: "bounce.out",
          scrollTrigger: {
            trigger: rocket.current,
            start: "top top",
            end: "+=200",
            scrub: 1,
            pin: true,
        }
      })
      gsap.to(level3FallOf.current, {
        x:'100vw',
        y: '0',  
        rotate: 800,
        scale: 0,
        ease: "bounce.out",
          scrollTrigger: {
            trigger: rocket.current,
            start: "+=0",
            end: "+=300",
            scrub: 2,
            pin: true,
        }
      })
      gsap.to(level4FallOf.current, {
        x:'80vw',
        y: '0',  
        rotate: -80,
        scale: 0,
        ease: "bounce.out",
          scrollTrigger: {
            trigger: rocket.current,
            start: "+=300",
            end: "+=500",
            scrub: 2,
            pin: true,
        }
      })
    })
      
    return () => ctx.revert();
  },[slider])

  return (
    <div className="App" ref={component}>
      <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div ref={slider} className="container">
        <div ref={rocket} className="rocket">
          <img src={rocketLevel4} ref={level4FallOf} alt="rocket" className="rocket-parts"/>
          <img src={rocketLevel3} ref={level3FallOf} alt="rocket" className="rocket-parts"/>
        <img src={rocketLevel2}  ref={level2FallOf} alt="rocket" className="rocket-parts"/>
        <img src={rocketLevel1} ref={level1FallOf} alt="rocket" className="rocket-parts"/>
        </div>
      </div>
      <div  className="lastContainer">Last Container</div>
    </div>
  );
}
