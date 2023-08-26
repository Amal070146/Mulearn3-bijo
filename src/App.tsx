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
      
      const panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (slider.current as unknown as HTMLElement).offsetWidth,
          markers: true
        }
      });
      
    })
    return () => ctx.revert();
  },[slider,component])

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
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
      </div>
      <div  className="lastContainer">Last Container</div>
    </div>
  );
}
