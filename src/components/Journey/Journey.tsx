import EarthImage from '../../assets/earth.svg'

import Rocket, { LevelDescriptions } from './Rocket/Rocket'
import { timeline } from './utils/timeline'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Style from './Journey.module.css'
import { ScrollTrigger,MotionPathPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)
const Journey = () => {
    const Journey=useRef<HTMLElement>(null)
    const JourneyHead=useRef<HTMLHeadingElement>(null)
    const RocketRef=useRef<HTMLDivElement>(null)
    
    const RocketLayer1=useRef<HTMLImageElement>(null)
    const RocketLayer2=useRef<HTMLImageElement>(null)
    const RocketLayer3=useRef<HTMLImageElement>(null)
    const RocketLayer4=useRef<HTMLImageElement>(null)
    const RocketLayer=[RocketLayer1,RocketLayer2,RocketLayer3,RocketLayer4]
    
    const LevelDesc1=useRef<HTMLDivElement>(null)
    const LevelDesc2=useRef<HTMLDivElement>(null)
    const LevelDesc3=useRef<HTMLDivElement>(null)
    const LevelDesc4=useRef<HTMLDivElement>(null)
    const LevelDesc=[LevelDesc1,LevelDesc2,LevelDesc3,LevelDesc4]

    const Earth=useRef<HTMLImageElement>(null)
    useEffect(() => {
        const ctx=gsap.context(()=>{
            const tl=gsap.timeline({
                scrollTrigger: {
                    trigger: Journey.current,    
                    start: 'top top',
                    end: 'bottom+=3000 top',
                    markers: true,
                    pin: true,
                    scrub: true,
                }
        })
        gsap.from(JourneyHead.current, {
            scrollTrigger: {
                trigger: Journey.current,    
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            },
            yPercent: -250
        })
        tl.add(timeline({Rocket:RocketRef,Earth,RocketLayer,LevelDesc}))
    })
    return ()=>ctx.revert()

    },[])
    return (
        <section className={Style.Journey}  ref={Journey}>
            <h2 className={Style.headerText} ref={JourneyHead}  >
                Journey at µLearn
            </h2>
            <div className={Style.journeyBodyContainer}>
            <div className={Style.journeyBody}>
                <img src={EarthImage} alt="Earth" className={Style.earth} id='earth' ref={Earth} style={{display: 'none'}}/>
                <Rocket rocket={RocketRef} RocketLayer={RocketLayer} />
                <LevelDescriptions LevelDesc={LevelDesc} Rocket={RocketRef}/>
            </div>
        </div>
        </section>
    )
}



export default Journey