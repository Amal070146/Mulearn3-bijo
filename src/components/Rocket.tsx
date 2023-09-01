import {  useLayoutEffect, useRef } from 'react'
import rocketLevel1 from "../assets/level1.png"
import rocketLevel2 from "../assets/level2.png"
import rocketLevel3 from "../assets/level3.png"
import rocketLevel4 from "../assets/level4.png"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import './Rocket.css'
const desc=`Basic Enablement Tasks
This marks the start and the overview of µLearn
foundation. Ivde enthelum okke data indakki 
vecho ath aanallo athinde oru maryatha.`
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

const Rocket = () => { 
    const slider = useRef(null);
    const rocket = useRef(null);
    const level1FallOf= useRef(null),level2FallOf= useRef(null),level3FallOf= useRef(null),level4FallOf= useRef(null);
    const descLevel1= useRef(null),descLevel2= useRef(null),descLevel3= useRef(null),descLevel4= useRef(null);
    const journey = useRef(null);
    const journeyLevel1= useRef(null),journeyLevel2= useRef(null),journeyLevel3= useRef(null),journeyLevel4= useRef(null);
    function setFrames() {
      const gs=[descLevel1,descLevel2,descLevel3,descLevel4]
      const anim=gsap.timeline();
      anim.from(slider.current, {
        scrollTrigger: {
          trigger: slider.current,
          start: "top 0",
          end: "+=10000",
          scrub: 3,
          pin: true
        }
      })
      gs.forEach((ref)=>{anim.fromTo(ref.current, {scale:0},{scale:0})})
      return anim
    }
    function intro() {
      const anim=gsap.timeline();
      anim.from(journey.current, {
        duration: 1, opacity: 0, y: -500,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: slider.current,
          start: "top center",
          end: "top bottom",
          scrub: 3,
        }
      })
      return anim
    }
    function level1Entrance(){
      const anim=gsap.timeline();
        anim.to(descLevel1.current , {
          duration: 1.5, opacity: 1,scale:1,
          y:0,
          ease: "ease.out",
          scrollTrigger: {
            trigger: slider.current,
            start: "2000",
            end: "bottom bottom",
            scrub: 3,
          }
        })
        return anim
    }
    function level1BreakOff(){
      const anim=gsap.timeline(
        {scrollTrigger: {
          trigger: slider.current,
          start: "3000",
          scrub: 3,
        }}
      );
        anim.to(descLevel1.current , {
          opacity: 0,
          duration: 10,

        }).to(journeyLevel1.current , {
         
          duration: 1.5,scale:0,
          
          ease: "ease.out",
        })
        return anim
    }
    function rocketEntrance(){
      const anim=gsap.timeline();
        anim.from(rocket.current , {
          duration: 1.5, opacity: 0,y:300,
          ease: "ease.out",
          scrollTrigger: {
            trigger: slider.current,
            start: "top top",
            end: "top bottom",
            scrub: 3,
          }
        })
        
      return anim
    }
   
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const master=gsap.timeline(
            {scrollTrigger: {
              trigger: slider.current,
              start: "top top",
              end: "bottom bottom",
            }}
          );
          master.add(setFrames());
          master.add(intro())
          master.add(rocketEntrance());
          master.add(level1Entrance());
          master.add(level1BreakOff());
        }) 
        return () => ctx.revert();
      },[slider])
  return (
    <div ref={slider} className="container">
      <div className="headers" ref={journey}>
      <div className='header-text'>Journey at µLearn</div>
      </div>
      <div ref={rocket} className="rocket" >
        <div className="part" ref={journeyLevel4}>
        <img src={rocketLevel4} ref={level4FallOf} alt="rocket" className="rocket-parts"/>
        <Frame level="4" desc={desc} refer={descLevel4}/>
        </div>
        <div className="part" ref={journeyLevel3}>
          <img src={rocketLevel3} ref={level3FallOf} alt="rocket" className="rocket-parts"/>
          <Frame level="3" desc={desc} refer={descLevel3}/>
        </div>
        <div className="part" ref={journeyLevel2} >
          <img src={rocketLevel2} ref={level2FallOf} alt="rocket" className="rocket-parts"/>
          <Frame level="2" desc={desc} refer={descLevel2}/>
        </div>
        <div className="part" ref={journeyLevel1}>
          <img src={rocketLevel1} ref={level1FallOf} alt="rocket" className="rocket-parts"/>
          <Frame level="1" desc={desc} refer={descLevel1}/>
        </div>
      </div>
      <div className="desc">
      </div>
  </div>
  )
}

export const Frame = ({level,desc,refer}:{level:string,desc:string,refer:null|React.RefObject<HTMLDivElement>}) => {
    return (
        <div className="frame" ref={refer}>
            <div className="text-wrapper">Level {level}</div>
            <p className="basic-enablement">{desc}</p>
        </div>
    );
};


export default Rocket