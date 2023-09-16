import level4 from '../../../assets/level4.png'
import level3 from '../../../assets/level3.png'
import level2 from '../../../assets/level2.png'
import level1 from '../../../assets/level1.png'
import pointer from '../../../assets/pointer.svg'
import './Rocket.css'
import './LevelDesc.css'
import { levels } from './LevelData'
import { useEffect, useState } from 'react'

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

export const LevelDescriptions=({level})=>{
    const [h,setH]=useState(0)
    const rocketHeight = document.getElementById('rocket')?.offsetHeight;
    const levelDetails=levels[level-1]
    useEffect(()=>{
        setH(rocketHeight)
    },[rocketHeight])
    return(
        <div className='list-levelDesc-container' style={{height: h}}>
            <div key={levelDetails.id} className='levelDesc-container'>
                <img src={pointer} className='pointer '/>
                    <h3>{levelDetails.title}</h3>
                    <div className='levelDesc-container-sub'>
                        <h4>{levelDetails.heading}</h4>
                        <p>{levelDetails.description}</p>
                    </div>
                </div>
        </div>
    )
}
export default Rocket

