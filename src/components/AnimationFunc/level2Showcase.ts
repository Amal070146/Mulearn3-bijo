import { breakOut, vibrate } from "./breakOut"
import { setUplevelPointerLocation, showLevelPointer } from "./levelPointerAnimations"
import gsap from 'gsap'
import { enlargeRocket } from "./rocketEnlarge"
import { removeDescription } from "./disappear"

export function level2Showcase({rocketLayer,levelPointer,descLevel,dummy,setLevel,rocket}){
    const timeline = gsap.timeline({
        onStart:()=>{setLevel('2')},
        onReverseComplete:()=>{setLevel('1') },
    })
    timeline.add(enlargeRocket(rocket))
    timeline.add(vibrate(rocket),'-=1')
    timeline.add(setUplevelPointerLocation({levelPointer,rocketLayer}))
    timeline.add(showLevelPointer({levelPointer}))
    timeline.add(setUpDescriptionLevel1({descLevel}))
    timeline.add(removeDescription(descLevel,levelPointer,dummy))
    timeline.add(breakOut(rocketLayer))
    return timeline
}


function setUpDescriptionLevel1({descLevel}){
    const timeline = gsap.timeline()
   
        timeline.to(descLevel.current,{
            opacity:0,
        }).to(descLevel.current,{
            opacity:1,  
        })
    
    return timeline
}

