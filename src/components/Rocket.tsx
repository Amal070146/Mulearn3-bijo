import {  useLayoutEffect, useRef } from 'react'
import rocketLevel1 from "../assets/level1.png"
import rocketLevel2 from "../assets/level2.png"
import rocketLevel3 from "../assets/level3.png"
import rocketLevel4 from "../assets/level4.png"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import './Rocket.css'
import path from '../assets/path.svg'
const desc=`Basic Enablement Tasks
This marks the start and the overview of µLearn
foundation. Ivde enthelum okke data indakki 
vecho ath aanallo athinde oru maryatha.`
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

const Rocket = () => { 
    const slider = useRef(null);
    const pathWay = useRef(null);
    const rocket = useRef(null);
    const level1FallOf= useRef(null),level2FallOf= useRef(null),level3FallOf= useRef(null),level4FallOf= useRef(null);
    const descLevel1= useRef(null),descLevel2= useRef(null),descLevel3= useRef(null),descLevel4= useRef(null);
    const journey = useRef(null);
    const journeyLevel1= useRef(null),journeyLevel2= useRef(null),journeyLevel3= useRef(null),journeyLevel4= useRef(null);
    function setFrames() {
      const gs=[descLevel1,descLevel2,descLevel3,descLevel4,pathWay]
      const anim=gsap.timeline();
      anim.from(slider.current, {
        scrollTrigger: {
          trigger: slider.current,
          start: "top 0",
          end: "+=5500",
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
    function rocketEntrance(){
      const anim=gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          start: "100 bottom-=300",
          end: "bottom bottom",
          scrub: 3,
        }
      });
        anim.fromTo(rocket.current , {
          opacity: 0,y:1000,
        }, {
          duration: 1.5, opacity: 1,y:50,
          ease: "ease.in",
        })
        
      return anim
    }
    function level1Entrance(){
      const anim=gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          start: "1100",
          end: "2200",
          scrub: 3,
        }
      });
      anim.fromTo(pathWay.current ,{
        x:255,
        y:400,
        scale:1,
        opacity:0
      }, {
        duration: 2, 
        opacity: 1,
        scale:1,
        x:255,
        y:400,
        ease: "ease.out",})
        anim.fromTo(descLevel1.current ,{
          x:500,
          y:350,
          scale:1,
          opacity:0
        }, {
          duration: 2, opacity: 1,scale:1,
          x:330,
          y:350,
          ease: "ease.out",})
          .to(descLevel1.current , {  
            opacity:0,
            duration: 2,
          }).to(pathWay.current , {
            opacity: 0,
            duration: 1.5
          })
          .to(journeyLevel1.current , {
              position: "absolute",
              y: 100 ,
              x: -200,
              duration: 3,scale:0,
              rotate: 360,
              ease: "ease.out",
            },'+=2') 
        
        return anim
    }
    function level2Entrance(){
      const anime=gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          start: "2100",
          end: "3200",
          scrub: 3,
        }
      }).fromTo(pathWay.current ,{
        x:255,
        y:300,
        scale:1,
        opacity:0,
      },{
        x:255,
        y:300,
        scale:1,
        opacity:1
      }).fromTo(descLevel2.current ,{
        x:500,
        y:250,
        opacity:0,
        scale:1,
      },{
        opacity:1,
        x:330,
        y:250,
        scale:1
      }).to(descLevel2.current , {
        opacity:0,
        x:700,
      },'+=1').to(pathWay.current , {
        opacity:0,
      },'-=0.8').to(journeyLevel2.current , {
        x:200,
        y:300,
        duration:1,
        scale:0,
        rotate: 520,
      })
      return anime
    }
    function level3Entrance(){
      const anime=gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          start: "3210",
          end: "4200",
          scrub: 3,
        }
      }).fromTo(pathWay.current ,{
        x:255,
        y:200,
        scale:1,
        opacity:0,
      },{
        x:255,
        y:200,
        scale:1,
        opacity:1
      }).fromTo(descLevel3.current ,{
        x:500,
        y:150,
        opacity:0,
        scale:1,
      },{
        opacity:1,
        x:330,
        y:150,
        scale:1
      } ).to(descLevel3.current , {
        x:600,
        opacity:0,
      },'+=1').to(pathWay.current , {
        opacity:0,

      },'-=0.8').to(journeyLevel3.current , {
        x:-200,
        y:200,
        duration:1,
        scale:0,
        rotate: 520,
      })
      return anime  
    }
    function level4Entrance(){
      const anime=gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          start: "4210",
          end: "5200",
          scrub: 3,
        }
      }).fromTo(pathWay.current ,{
        x:255,
        y:100,
        scale:1,
        opacity:0,
      },{
        x:255,
        y:150,
        scale:1,
        opacity:1
      }).fromTo(descLevel4.current ,{
        x:500,
        y:100,
        opacity:0,
        scale:1,
      },{
        opacity:1,
        x:330,
        y:100,
        scale:1
      }).to(descLevel4.current , {
        x:600,
        opacity:0,
      },'+=1').to(pathWay.current , {
        opacity:0,
      },'-=0.8')
      .to(
        rocket.current,{
          rotate:90,
          x:50,
          y:0,
          scale:2,
          duration:2,
        },'+=1'
      )
      .to(
        rocket.current,{
          x:500,
          y:50,
          duration:2
        }
      )
      return anime
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
          master.add(level2Entrance());
          master.add(level3Entrance());
          master.add(level4Entrance());
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
        </div>
        <div className="part" ref={journeyLevel3}>
          <img src={rocketLevel3} ref={level3FallOf} alt="rocket" className="rocket-parts"/>
        </div>
        <div className="part" ref={journeyLevel2} >
          <img src={rocketLevel2} ref={level2FallOf} alt="rocket" className="rocket-parts"/>
        </div>
        <div className="part" ref={journeyLevel1}>
          <img src={rocketLevel1} ref={level1FallOf} alt="rocket" className="rocket-parts"/>
        </div>
      </div>
      <div style={{ position: "absolute",height:"40%" }} className="rom" ref={pathWay}>
        <img src={path} height={"20%"}/>
      </div> 

      <Frame level="4" desc={desc} refer={descLevel4}/>
      <Frame level="3" desc={desc} refer={descLevel3}/>
      <Frame level="2" desc={desc} refer={descLevel2}/>
      <Frame level="1" desc={desc} refer={descLevel1}/>
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