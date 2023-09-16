import {  useLayoutEffect, useState } from 'react'
import './Journey.css'
import './Heading.css'
import Earth from '../../assets/earth.svg'
import Rocket, { LevelDescriptions } from './Rocket/Rocket'
import { timeline } from './utils/timeline'
import gsap from 'gsap'
import { ScrollTrigger ,MotionPathPlugin} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)

const Journey = () => {
    return (
        <section className='Journey' id='Journey' >
            <JourneyHeading/>
            <JourneyBody />
        </section>
    )
}

const JourneyHeading = () => {
    return(
        <h2 className='header-text' id='journey-header' >
            Journey at µLearn
        </h2>
    )
}

const JourneyBody = () => {
    const [level,setLevel]=useState(1)

    useLayoutEffect(() => {
        const ctx=gsap.context(()=>{
            const tl=gsap.timeline({
                scrollTrigger: {
                    trigger: document.querySelector('.Journey'),    
                    start: 'top top',
                    end: 'bottom top',
                    markers: true,
                    pin: true,
                    scrub: true,
                }
        })
        gsap.from('#journey-header', {
            scrollTrigger: {
                trigger: document.querySelector('.Journey'),    
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            },
            yPercent: -250
        })
        tl.add(timeline())
    })
    return ()=>ctx.revert()

    },[])
    return(
        <div className='journeyBodyContainer'>
            <div className='journeyBody'>
                <img src={Earth} alt="Earth" className='earth' style={{display: 'none'}}/>
                <Rocket/>
                <LevelDescriptions level={level}/>
            </div>
        </div>
    )
}

export default Journey