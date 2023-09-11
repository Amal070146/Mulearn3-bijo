export function level4Showcase({gsap,levelPointer,descLevel,dummy,setLevel,rocket}){
    const timeline = gsap.timeline({
        onStart:()=>{setLevel('4')},
        onReverseComplete:()=>{setLevel('3') },
    })
    timeline.add(enlargeRocket({gsap,rocket}))
    timeline.add(setUplevelPointerLocation({gsap,levelPointer}))
    timeline.add(setUpDescriptionLevel1({gsap,descLevel}))
    timeline.add(disAppear({gsap,descLevel,levelPointer,dummy}))
    return timeline
}
function enlargeRocket({gsap,rocket}){
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        scale:'+=1',
        y:'+=270'
    })
    return timeline
}
function setUplevelPointerLocation({gsap,levelPointer}){
    const timeline = gsap.timeline()
    timeline.to(levelPointer.current,{
        opacity:1,
        x:'-=100',
    })
    return timeline
}

function setUpDescriptionLevel1({gsap,descLevel}){
    const mediaQuery = gsap.matchMedia()
    const timeline = gsap.timeline()
   
        timeline.to(descLevel.current,{
            opacity:0,
            x:'-=100',
            y:()=>{
                mediaQuery.add({
                    isLandscape: '(orientation:landscape)',
                    isPortrait: '(orientation:portrait)',
                },(context)=>{
                    const {isLandscape}=context.conditions
                    return isLandscape?'+=50':'+=0'
                })
            },
        }).to(descLevel.current,{
            opacity:1,  
        })
    
    return timeline
}

function disAppear({gsap,descLevel,levelPointer,dummy}){
    const timeline = gsap.timeline()
    const play={
        opacity:0,
        x:'+=100',
    }
    timeline.from(dummy.current,{opacity:0})
    timeline.to(dummy.current,play)
    .to(dummy.current,play)
    .to(descLevel.current,play)
    .to(levelPointer.current,play)
    return timeline
}
