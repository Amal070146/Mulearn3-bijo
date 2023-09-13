import  { useEffect, useLayoutEffect, useRef,useState} from 'react'
import { layer1, layer2, layer3, layer4 } from './support'
import { moon, earth } from './support'
import './Rocket.css'
import Frame from './Frame'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { rocketEntering } from './AnimationFunc/rocketEntering'
import { level1Showcase } from './AnimationFunc/level1Showcase'
import { level2Showcase } from './AnimationFunc/level2Showcase'
import { MotionPathPlugin } from 'gsap/all'
import { level3Showcase } from './AnimationFunc/level3Showcase'
import { level4Showcase } from './AnimationFunc/level4Showcase'
import { planetEntering } from './AnimationFunc/planetEntering'


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
  const earthRef=useRef(null),moonRef=useRef(null)
  // dummy  ref
  const dummy=useRef(null)
  useLayoutEffect(()=>{
    const rocketParts=[rocketLayer1,rocketLayer2,rocketLayer3]
    
    const ctx=gsap.context(()=>{

    const props={
      levelPointer:levelPointer,
      rocket:rocket,
    }
    const master=gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom+=5000 top",
        scrub: 1,
        pin: true,
        fastScrollEnd: true
      }
    })
    master.add(rocketEntering(props))
    .add(level1Showcase({...props,rocketLayer1:rocketLayer1,descLevel1:descLevel1,dummy:dummy}))
    .add(level2Showcase({...props,rocketLayer:rocketLayer2,descLevel:descLevel1,dummy:dummy,setLevel:setLevel}),'-=0.5' )
    .add(level3Showcase({...props,rocketLayer:rocketLayer3,descLevel:descLevel1,dummy:dummy,setLevel:setLevel}),'-=0.5')
    .add(level4Showcase({...props,descLevel:descLevel1,dummy:dummy,setLevel:setLevel,rocketLayer:rocketLayer4}),'-=0.5')
    .add(planetEntering({...props,earthRef:earthRef,rocketParts:rocketParts}))
  })

    return ()=>ctx.revert()
  },[rocketLayer1,rocketLayer2,rocketLayer3])

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
    
    <img src={moon} alt="moon" className="moon planet" ref={moonRef}/>
    
    <img src={earth} alt="earth" className="earth planet" ref={earthRef}/> 

  </div>
  )
}

export default Rocket