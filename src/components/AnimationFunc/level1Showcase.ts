import MotionPathPlugin from "gsap/MotionPathPlugin"
export function level1Showcase({gsap,rocketLayer1,levelPointer,descLevel1,dummy}){
    const timeline = gsap.timeline()
    timeline.add(setUplevelPointerLocation({gsap,rocketLayer1,levelPointer}))
    timeline.add(setUpDescriptionLevel1({gsap,descLevel1,levelPointer}))
    timeline.add(disAppear({gsap,descLevel1,levelPointer,dummy}))
    return timeline
}

function setUplevelPointerLocation({gsap,rocketLayer1,levelPointer}){
    const timeline = gsap.timeline()
    timeline.fromTo(levelPointer.current,{
        opacity:0,
    },{
        opacity:0,
        x:()=>{
            return MotionPathPlugin.getRelativePosition(levelPointer.current,rocketLayer1.current,[0,0],[0.5,0.5]).x
        },
        y:()=>{
            return MotionPathPlugin.getRelativePosition(levelPointer.current,rocketLayer1.current,[0,0],[0.5,0.5]).y
        },
     }).to(levelPointer.current,{
         opacity:1,
     })

    return timeline
}
function setUpDescriptionLevel1({gsap,descLevel1,levelPointer}){
    const timeline = gsap.timeline()
    const mediaQuery = gsap.matchMedia()
    mediaQuery.add({
        isLandscape: '(orientation:landscape)',
        isPortrait: '(orientation:portrait)',
    },(context)=>{
        const {isLandscape}=context.conditions
        timeline.fromTo(descLevel1.current,{
            
            opacity:0,
            transform:isLandscape?'translate(0%, 0%)':'translate(50%, -100%)'
        },{
            opacity:0,
            transform:isLandscape?'translate(0%, 0%)':'translate(50%, -150%)',
            x:()=>{
                if(isLandscape)
                return MotionPathPlugin.getRelativePosition(descLevel1.current,levelPointer.current,[0,0],[0.5,0]).x                
            },
            y:()=>{
                if(isLandscape)
                return MotionPathPlugin.getRelativePosition(descLevel1.current,levelPointer.current,[0,2],[1,1]).y
            },
        }).to(descLevel1.current,{
            opacity:1,  
        })
    })
    
    return timeline
}
function disAppear({gsap,descLevel1,levelPointer,dummy}){
    const timeline = gsap.timeline()
    const play={
        opacity:0,
        x:'+=100',
    }
    timeline.from(dummy.current,{opacity:0})
    timeline.to(dummy.current,play)
    .to(dummy.current,play)
    .to(descLevel1.current,play)
    .to(levelPointer.current,play)
    return timeline
}
// function breakOut({gsap,rocketLayer1}){
//     const timeline = gsap.timeline()
//     timeline.fromTo(rocketLayer1.current,{
        
//     })
// }