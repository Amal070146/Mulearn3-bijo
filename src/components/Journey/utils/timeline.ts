import gsap from 'gsap'
import {MotionPathPlugin} from 'gsap/all'
export const timeline=()=>{
    const tl=gsap.timeline()
    tl.add(a())
    .add(b())
    .add(c())
    return tl
}

function a(){
    const tl=gsap.timeline()
    tl.from('.rocket', {
        yPercent: 150
    })
    return tl
}

function b(){
    const tl=gsap.timeline({
        onStart:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer1`)
            const levelDesc=document.querySelector('.levelDesc-container')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
            gsap.set('.levelDesc-container',{
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
            const rocketLayer1=document.querySelector(`#rocketLayer1`)
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
    tl.to('#rocketLayer1',{
        scale:0,
        rotate:360,
        opacity:0,
        x:'-=50',
    })
    return tl
}

function c(){
    const tl=gsap.timeline({
        onStart:()=>{
            
            const rocketLayer1=document.querySelector(`#rocketLayer2`)
            const levelDesc=document.querySelector('.levelDesc-container')
            const p=MotionPathPlugin.getRelativePosition(levelDesc,rocketLayer1,[0.5,0.5],[0.5,0.5])
            gsap.set('.levelDesc-container',{
                opacity:0,
                y:'+='+p.y,
                x:'+='+p.x
            })   
        },
        onReverseComplete:()=>{
            const rocketLayer1=document.querySelector(`#rocketLayer1`)
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
            const rocketLayer1=document.querySelector(`#rocketLayer2`)
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

function d(){
    const tl=gsap.timeline({
        onStart:()=>{
            
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
            const rocketLayer1=document.querySelector(`#rocketLayer1`)
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
    return tl
}