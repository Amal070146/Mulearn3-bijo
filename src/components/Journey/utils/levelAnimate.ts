import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"
import { DivElement, ImageElement } from "./types"
export interface LevelProps{
    RocketLayer:ImageElement
    LevelDesc:DivElement
}
export function levelAnimate({RocketLayer,LevelDesc}:LevelProps){
    
    const tl=gsap.timeline({
        onStart:()=>{
            const levelDesc=LevelDesc?.current as Element
            const Rocket= RocketLayer?.current as Element
            const p=MotionPathPlugin.getRelativePosition(levelDesc,Rocket,[0.5,0.5],[0.5,0.5]) 
            gsap.set(LevelDesc?.current,{
                y:'+='+p.y,
                x:'+='+p.x
            })
        },
    })
    tl.fromTo(LevelDesc?.current,{
        opacity:0,
        x:'+=300',
    },{
        x:()=>{
            const levelDesc=LevelDesc?.current as Element
            const Rocket= RocketLayer?.current as Element
            const x=MotionPathPlugin.getRelativePosition(levelDesc,Rocket,[0,0],[1,1]).x
            return '+='+x
        },
        opacity:1,
    })
    .to(LevelDesc?.current,{
        opacity:0,
        x:'+=300',
    },'+=1.5')
    // break Off
    
    return tl
}