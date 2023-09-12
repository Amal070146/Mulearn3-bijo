import { breakOut } from "./breakOut"
import { removeDescription } from "./disappear"
import { setUplevelPointerLocation, showLevelPointer } from "./levelPointerAnimations"
import gsap from 'gsap'

// import MotionPathPlugin from "gsap/MotionPathPlugin"
export function level1Showcase({rocketLayer1,levelPointer,descLevel1,dummy}){
    const timeline = gsap.timeline({
        
    })
    timeline.add(setUplevelPointerLocation({levelPointer,rocketLayer:rocketLayer1}))
    timeline.add(showLevelPointer({levelPointer}))
    timeline.add(setUpDescriptionLevel1({descLevel1}))
    timeline.add(removeDescription(descLevel1,levelPointer,dummy))
    timeline.add(breakOut(rocketLayer1))
    return timeline
}

function setUpDescriptionLevel1({descLevel1}){
    const timeline = gsap.timeline()
    const mediaQuery = gsap.matchMedia()
    mediaQuery.add({
        isLandscape: '(orientation:landscape)',
        isPortrait: '(orientation:portrait)',
    },(context)=>{
        const {isLandscape}=context.conditions
        timeline.fromTo(descLevel1.current,{
            opacity:0,
            transform:isLandscape?'translate(0%, 0%)':'translate(50%, -100%)'
        },{
            opacity:0,
            transform:isLandscape?'translate(0%, 0%)':'translate(50%, -150%)',
            y:isLandscape?'-=200':'+=0',
            
        }).to(descLevel1.current,{
            opacity:1,  
        })
    })
    
    return timeline
}
