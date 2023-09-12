import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

export function setUplevelPointerLocation({levelPointer,rocketLayer}){
    const timeline = gsap.timeline({
        scrollTrigger: {
            onUpdate:()=>{
                setupPointerLocation(timeline,levelPointer,rocketLayer)
            },
        },
    })
    return timeline
}


export function showLevelPointer({levelPointer}){
    return gsap.timeline().fromTo(levelPointer.current,{ 
        opacity:0
    },{
        opacity:1,
    })
}

export function setupPointerLocation(timeline: { set: (arg0: Element, arg1: { x: string; y: string; }) => void },levelPointer: { current: Element },rocketLayer: { current: Element }){
    const p=MotionPathPlugin.getRelativePosition(levelPointer.current,rocketLayer.current,[0,0],[0.5,0.75])
    timeline.set(
        levelPointer.current,
        {
            x:'+='+p.x,
            y:'+='+p.y,
        }
    )
}