import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"

export function level3(){
    const tl=gsap.timeline({
        onStart:()=>{
            gsap.set('#levelDesc3',{
                display:'block',
            })
            const rocketLayer1=document.querySelector(`#rocketLayer3`)
            const levelDesc=document.querySelector('.levelDesc-container')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
            gsap.set('.levelDesc-container',{
                opacity:0,
                y:'+='+p.y,
                x:'+='+p.x
            })   
        },
        onReverseComplete:()=>{
            gsap.set('#levelDesc3',{
                display:'none',
            })
            const rocketLayer1=document.querySelector(`#rocketLayer2`)
            const levelDesc=document.querySelector('.levelDesc-container')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
            gsap.set('.levelDesc-container',{
                opacity:0,
                y:'+='+p.y,
                x:'+='+p.x
            })   
            
        }
    })
    tl.fromTo('.levelDesc-container',{
        opacity:0,
        x:'+=300',
        
    },{
        x:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer3`)
            const levelDesc=document.querySelector('.levelDesc-container')
            const x=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0,0],[1,1]).x
            return '+='+x
        },
        opacity:1,
    })
    .to('.levelDesc-container',{
        opacity:0,
        x:'+=300',
    },'+=1.5')

    // break Off
    tl.to('#rocketLayer3',{
        scale:0,
        rotate:360,
        opacity:0,
        x:'-=50',
    })
    return tl
}