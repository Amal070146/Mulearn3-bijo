import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"

export function level4(){
    const tl=gsap.timeline({
        onStart:()=>{
            gsap.set('#levelDesc4',{
                display:'block',
            })
            const rocketLayer1=document.querySelector(`#rocketLayer4`)
            const levelDesc=document.querySelector('.levelDesc-container')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
            gsap.set('.levelDesc-container',{
                opacity:0,
                y:'+='+p.y,
                x:'+='+p.x
            })   
        },
        onReverseComplete:()=>{
            gsap.set('#levelDesc4',{
                display:'none',
            })
            const rocketLayer1=document.querySelector(`#rocketLayer3`)
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
            const rocketLayer1=document.querySelector(`#rocketLayer4`)
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

    
    return tl
}