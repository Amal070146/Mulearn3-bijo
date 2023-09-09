import  { useEffect, useRef } from 'react'
import { layer1, layer2, layer3, layer4 } from './support'
// import { moon, earth } from './support'
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
  const descLevel1=useRef(null)
  // const descLevel2=useRef(null),descLevel3=useRef(null),descLevel4=useRef(null)
  // level pointer ref
  const levelPointer=useRef(null)
  // planet ref
  // const earthRef=useRef(null),moonRef=useRef(null)
  useEffect(()=>{
    
    const ctx=gsap.context(()=>{
      const mediaQuery = gsap.matchMedia()
    mediaQuery.add({
      isLandscape: '(orientation:landscape)',
      isPortrait: '(orientation:portrait)',

    },(context)=>{
      const {isLandscape, isPortrait}=context.conditions
      console.log({isLandscape, isPortrait})
    })
      gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          markers: true,
          scrub: 1,
          pin: true,
        }
      })
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
      <img src={layer4} alt="layer4" className="layer" ref={rockerLayer4} />
      <img src={layer3} alt="layer3" className="layer" ref={rockerLayer3} />
      <img src={layer2} alt="layer2" className="layer" ref={rockerLayer2} />
      <img src={layer1} alt="layer1" className="layer" ref={rockerLayer1} />
    </div>
    <Frame level="1" refer={descLevel1} classname="levels"/>
    <svg width='25%' viewBox="0 0 4080 748" fill="none" preserveAspectRatio='xMidYMid meet' className='levelPointer1' ref={levelPointer} style={{position:"absolute"}}>
      <path d="M39.0769 38.4617L742.923 742.308H4079.69" stroke="white" strokeWidth="10"/>
      <circle cx="25.6418" cy="25.0266" r="25" fill="white"/>
    </svg>
    
    {/* 
    <Frame level="2" refer={descLevel2}/>
    <Frame level="3" refer={descLevel3}/>
    <Frame level="4" refer={descLevel4}/>
    <img src={moon} alt="moon" className="moon planet" ref={moonRef}/>
    <img src={earth} alt="earth" className="earth planet" ref={earthRef}/> */}
  </div>
  )
}



export default Rocket