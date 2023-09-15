import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Journey = () => {
    useLayoutEffect(() => {
        const ctx=gsap.context(()=>{
            const timeline=gsap.timeline({
                scrollTrigger: {
                    trigger: document.querySelector('.Journey'),    
                    start: 'top top',
                    end: 'bottom top',
                    markers: true,
                    pin: true,
                    scrub: true,
                }
            })
        })
        return ()=>ctx.revert()
    })

    return (
        <section className='Journey' style={{height: '100vh', width: '100vw', background: 'black',padding:'44px 0 20px 0'}}>
            <JourneyHeading/>
        </section>
    )
}

const JourneyHeading = () => {
    return(
        <h2 >
            Journey at µLearn
        </h2>
    )
}

export default Journey