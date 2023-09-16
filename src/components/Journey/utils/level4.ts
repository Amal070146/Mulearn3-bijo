import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"

export function level4(){
    const tl=gsap.timeline({
        onStart:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer4`)
            const levelDesc=document.querySelector('#levelDesc4')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
            gsap.set('#levelDesc4',{
                opacity:0,
                y:'+='+p.y,
                x:'+='+p.x
            })   
        },
        onReverseComplete:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer3`)
            const levelDesc=document.querySelector('#levelDesc4')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
            gsap.set('#levelDesc4',{
                opacity:0,
                y:'+='+p.y,
                x:'+='+p.x
            })  
            
        }
    })
    tl.fromTo('#levelDesc4',{
        opacity:0,
        x:'+=300',
        
    },{
        x:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer4`)
            const levelDesc=document.querySelector('#levelDesc4')
            const x=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0,0],[1,1]).x
            return '+='+x
        },
        opacity:1,
    })
    .to('#levelDesc4',{
        opacity:0,
        x:'+=300',
    },'+=1.5')

    
    return tl
}