import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"

export function level2(){
    const tl=gsap.timeline({
        onStart:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer2`)
            const levelDesc=document.querySelector('#levelDesc2')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
        
            gsap.set('#levelDesc2',{
                opacity:0,
                y:'+='+p.y,
                x:'+='+p.x
            }) 
        },
        onReverseComplete:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer1`)
            const levelDesc=document.querySelector('#levelDesc2')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
            
            gsap.set('#levelDesc2',{
                opacity:0,
                y:'+='+p.y,
                x:'+='+p.x
            })   
            
        }
    })
    .fromTo('#levelDesc2',{
        opacity:0,
        x:'+=300',
    },{
        x:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer2`)
            const levelDesc=document.querySelector('#levelDesc2')
            const x=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0,0],[1,1]).x
            return '+='+x
        },
        opacity:1,
    })
    .to('#levelDesc2',{
        opacity:0,
        x:'+=300',
    },'+=1.5')

    // break Off
    tl.to('#rocketLayer2',{
        scale:0,
        rotate:360,
        opacity:0,
        x:'-=50',
    })
    return tl
}