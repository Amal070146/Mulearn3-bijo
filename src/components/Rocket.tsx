import  { useEffect, useRef } from 'react'
import { layer1, layer2, layer3, layer4 } from './support'
import { moon, earth } from './support'
import './Rocket.css'
import Frame from './Frame'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const Rocket = () => { 
  
  // main container ref
  const container = useRef(null)
  // heading ref
  const heading = useRef(null)
  // rocket ref
  const rocket = useRef(null)
  // rocket layers ref
  const rockerLayer1=useRef(null),rockerLayer2=useRef(null),rockerLayer3=useRef(null),rockerLayer4=useRef(null)
  // description by level ref
  const descLevel1=useRef(null),descLevel2=useRef(null),descLevel3=useRef(null),descLevel4=useRef(null)
  // level pointer ref
  const levelPointer=useRef(null)
  // planet ref
  const earthRef=useRef(null),moonRef=useRef(null)
  useEffect(()=>{
    
    const ctx=gsap.context(()=>{
      gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          markers: true,
          scrub: 1,
          pin: true
        }
      })
      
      .fromTo(rocket.current,  
        {
        yPercent: '100',        
      },{
        yPercent: '0',
      }).fromTo(levelPointer.current,{
        xPercent: 110,
        yPercent: 600,
        opacity: 0,
      },{
        xPercent: 110,
        yPercent: 600,
        opacity: 1,
      },'+=10')
      .fromTo(descLevel1.current ,{
        xPercent: 200,
        yPercent: 425,
        opacity: 0,
        scale: 1,
      },{ opacity: 1, xPercent: 130, yPercent: 425, scale: 1,stagger: 0,ease: "ease.in(1.7)"})
    })
    return ()=>ctx.revert()
  },[])

  // return value
  return (
  <div className="container" ref={container} >
    <div className="headers" ref={heading}>
      <div className='header-text'>Journey at µLearn</div>
    </div>
    <div className="rocket" ref={rocket}>
      <Layers refer={rockerLayer4} image={layer4}/>
      <Layers refer={rockerLayer3} image={layer3}/>
      <Layers refer={rockerLayer2} image={layer2}/>
      <Layers refer={rockerLayer1} image={layer1}/>
    </div>
    <Frame level="1" refer={descLevel1}/>
    <Frame level="2" refer={descLevel2}/>
    <Frame level="3" refer={descLevel3}/>
    <Frame level="4" refer={descLevel4}/>
    <svg width='25%' viewBox="0 0 4080 748" fill="none" preserveAspectRatio='xMidYMid meet' ref={levelPointer} style={{position:"absolute"}}>
      <path d="M39.0769 38.4617L742.923 742.308H4079.69" stroke="white" strokeWidth="10"/>
      <circle cx="25.6418" cy="25.0266" r="25" fill="white"/>
    </svg>
    <img src={moon} alt="moon" className="moon planet" ref={moonRef}/>
    <img src={earth} alt="earth" className="earth planet" ref={earthRef}/>
  </div>
  )
}


const Layers=({refer,image}:{refer:null|React.RefObject<HTMLDivElement>,image:string})=>{
  return (
    <div className="layer" ref={refer}>
      <img src={image} alt="layer4" className="layer4" />
    </div>
  );
}


export default Rocket