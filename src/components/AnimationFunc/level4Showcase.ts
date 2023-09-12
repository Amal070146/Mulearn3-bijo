import { setUplevelPointerLocation, showLevelPointer } from "./levelPointerAnimations"
import gsap from 'gsap'
import { enlargeRocket } from "./rocketEnlarge"
import { vibrate } from "./breakOut"
import { removeDescription } from "./disappear"

export function level4Showcase({levelPointer,descLevel,dummy,setLevel,rocket,rocketLayer}){
    const timeline = gsap.timeline({
        onStart:()=>{setLevel('4')},
        onReverseComplete:()=>{setLevel('3') },
    })
    timeline.add(enlargeRocket(rocket))
    timeline.add(vibrate(rocket),'-=1')
    timeline.add(setUplevelPointerLocation({levelPointer,rocketLayer}))
    timeline.add(showLevelPointer({levelPointer}))
    timeline.add(setUpDescriptionLevel1({descLevel}))
    timeline.add(removeDescription(descLevel,levelPointer,dummy))
    return timeline
}



function setUpDescriptionLevel1({descLevel}){
    const mediaQuery = gsap.matchMedia()
    const timeline = gsap.timeline()

    timeline.to(descLevel.current,{
        opacity:0,
        x:'-=100',
        y:()=>{
            mediaQuery.add({
                isLandscape: '(orientation:landscape)',
                isPortrait: '(orientation:portrait)',
            },(context)=>{
                const {isLandscape}=context.conditions
                return isLandscape?'+=50':'+=0'
            })
            return '+=50'
        },
    }).to(descLevel.current,{
        opacity:1,  
    })
    
    return timeline
}

