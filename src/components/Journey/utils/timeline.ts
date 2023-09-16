import gsap from 'gsap'
import {MotionPathPlugin} from 'gsap/all'
import { level1 } from './level1'
import { level2 } from './level2'
import { level3 } from './level3'
import { level4 } from './level4'
export const timeline=()=>{
    const tl=gsap.timeline()
    tl.add(rocketEntry())
    .add(level1())
    .add(level2())
    .add(level3())
    .add(level4())
    return tl
}

function rocketEntry(){
    const tl=gsap.timeline()
    tl.from('.rocket', {
        yPercent: 150
    })
    return tl
}




