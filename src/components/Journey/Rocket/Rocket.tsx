import level4 from '../../../assets/level4.png'
import level3 from '../../../assets/level3.png'
import level2 from '../../../assets/level2.png'
import level1 from '../../../assets/level1.png'
import pointer from '../../../assets/pointer.svg'
import './Rocket.css'
import './LevelDesc.css'
import { levels } from './LevelData'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger ,MotionPathPlugin} from 'gsap/all'
import { timeline } from '../utils/timeline'


// import { timeline } from '../utils/timeline'
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)

const Rocket = () => {
    return (
    <div className='rocket' id='rocket'>
        <img src={level4} alt="Rocket Level 4" id='rocketLayer4' className='rocketLayer' />
        <img src={level3} alt="Rocket Level 3" id='rocketLayer3' className='rocketLayer ' />
        <img src={level2} alt="Rocket Level 2" id='rocketLayer2' className='rocketLayer '  />
        <img src={level1} alt="Rocket Level 1" id='rocketLayer1' className='rocketLayer ' />
    </div>
    )
}

export const LevelDescriptions=()=>{
    const [h,setH]=useState(0)
    const rocketHeight = document.getElementById('rocket')?.offsetHeight;
    useEffect(()=>{
        setH(rocketHeight)
    },[rocketHeight])
    useEffect(() => {
        const ctx=gsap.context(()=>{
            const tl=gsap.timeline({
                scrollTrigger: {
                    trigger: document.querySelector('.Journey'),    
                    start: 'top top',
                    end: 'bottom+=3000 top',
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
        <div className='list-levelDesc-container' style={{height: h}}>
            {levels.map((leveled)=>(
            <div key={leveled.id} className={`levelDesc-container`} id={`levelDesc${leveled.level}`}>
                <img src={pointer} className='pointer' id={`levelDesc${leveled.level}0`}/>
                    <h3>{`Level ${leveled.level}`}</h3>
                    <div className='levelDesc-container-sub'>
                        <h4>{leveled.heading}</h4>
                        <p>{leveled.description}</p>
                    </div>
            </div>
            ))}
        </div>
    )
}
export default Rocket

