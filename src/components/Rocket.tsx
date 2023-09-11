import  { useEffect, useRef,useState} from 'react'
import { layer1, layer2, layer3, layer4 } from './support'
// import { moon, earth } from './support'
import './Rocket.css'
import Frame from './Frame'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { rocketEntering } from './AnimationFunc/rocketEntering'
import { level1Showcase } from './AnimationFunc/level1Showcase'
import { level2Showcase } from './AnimationFunc/level2Showcase'
import { MotionPathPlugin } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)

const Rocket = () => { 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [level, setLevel] = useState('1')
  // main container ref
  const container = useRef(null)
  // heading ref
  const heading = useRef(null)
  // rocket ref
  const rocket = useRef(null)
  // rocket layers ref
  const rocketLayer1=useRef(null),rocketLayer2=useRef(null),rocketLayer3=useRef(null),rocketLayer4=useRef(null)
  // description by level ref
  const descLevel1=useRef(null)
  // const descLevel2=useRef(null),descLevel3=useRef(null),descLevel4=useRef(null)
  // level pointer ref
  const levelPointer=useRef(null)
  // planet ref
  // const earthRef=useRef(null),moonRef=useRef(null)
  // dummy 
  const dummy=useRef(null)
  useEffect(()=>{
    
    const ctx=gsap.context(()=>{
    //   const mediaQuery = gsap.matchMedia()
    // mediaQuery.add({
    //   isLandscape: '(orientation:landscape)',
    //   isPortrait: '(orientation:portrait)',

    // },(context)=>{
    //   const {isLandscape, isPortrait}=context.conditions
    //   console.log({isLandscape, isPortrait})
     
    // })
    const props={gsap:gsap}
    const master=gsap.timeline({
      // onUpdate:()=>{
      //   console.log(MotionPathPlugin.getRelativePosition(rocketLayer2.current,levelPointer.current,[0,0],[0.5,0]))
      // },
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom+=3000 top",
        markers: true,
        scrub: 1,
        pin: true,
      }
    })
    master.add(rocketEntering({rocket:rocket,levelPointer:levelPointer,...props}))
    master.add(level1Showcase({...props,levelPointer:levelPointer,rocketLayer1:rocketLayer1,descLevel1:descLevel1,dummy:dummy}))
    master.add(level2Showcase({...props,levelPointer:levelPointer,rocketLayer2:rocketLayer2,descLevel2:descLevel1,dummy:dummy,setLevel:setLevel}))
    
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
      <img src={layer4} alt="layer4" className="layer" ref={rocketLayer4} />
      <img src={layer3} alt="layer3" className="layer" ref={rocketLayer3} />
      <img src={layer2} alt="layer2" className="layer" ref={rocketLayer2} />
      <img src={layer1} alt="layer1" className="layer" ref={rocketLayer1} />
    </div>
    <Frame level={level} refer={descLevel1} classname="levels"/>
    <svg width='30%'  viewBox="0 0 4080 748" fill="none" preserveAspectRatio='xMidYMid meet' className='levelPointer1' ref={levelPointer} style={{position:"absolute"}}>
      <path d="M39.0769 38.4617L742.923 742.308H4079.69" stroke="white" strokeWidth="10"/>
      <circle cx="25.6418" cy="25.0266" r="25" fill="white"/>
    </svg>
    <div ref={dummy} style={{position:"absolute",display:"none"}}></div>
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