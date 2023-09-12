import gsap  from 'gsap'
import { setupPointerLocation } from './levelPointerAnimations'
export function removeDescription(description: { current: Element },levelPointer: { current: Element },dummy: { current: Element}){
    const timeline = gsap.timeline()
    const play={opacity:0}
    timeline.from(dummy.current,{opacity:1})
    timeline.to(dummy.current,play)
    .to(dummy.current,play)
    .to(description.current,play)
    .to(levelPointer.current,{
        onStart:()=>setupPointerLocation(timeline,levelPointer,dummy),
        opacity:0
    })
    .to(dummy.current,{x:'-=100',y:'-=100'})
    .to(dummy.current,{x:'+=100',y:'+=100'})    
    return timeline
}

