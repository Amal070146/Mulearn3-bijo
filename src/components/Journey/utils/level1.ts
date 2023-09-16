import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"
export function level1(){
    const tl=gsap.timeline({
        onStart:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer1`)
            const levelDesc=document.querySelector('#levelDesc1')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5]) 
            gsap.set('#levelDesc1',{
                y:'+='+p.y,
                x:'+='+p.x
            })
        },
    })
    tl.fromTo('#levelDesc1',{
        opacity:0,
        x:'+=300',
    },{
        x:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer1`)
            const levelDesc=document.querySelector('#levelDesc1')
            const x=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0,0],[1,1]).x
            return '+='+x
        },
        opacity:1,
    })
    .to('#levelDesc1',{
        opacity:0,
        x:'+=300',
    },'+=1.5')
    // break Off
    tl.to('#rocketLayer1',{
        scale:0,
        rotate:360,
        opacity:0,
        x:'-=50',
    })
    return tl
}