export function level3Showcase({gsap,rocketLayer,levelPointer,descLevel,dummy,setLevel,rocket}){
    const timeline = gsap.timeline({
        onStart:()=>{setLevel('3')},
        onReverseComplete:()=>{setLevel('2') },
    })
    timeline.add(enlargeRocket({gsap,rocket}))
    timeline.add(setUplevelPointerLocation({gsap,levelPointer}))
    timeline.add(setUpDescriptionLevel1({gsap,descLevel}))
    timeline.add(disAppear({gsap,descLevel,levelPointer,dummy}))
    timeline.add(breakOut({gsap,rocketLayer}))
    return timeline
}
function enlargeRocket({gsap,rocket}){
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        scale:'+=0.5',
        y:'+=150'
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
    const timeline = gsap.timeline()
   
        timeline.to(descLevel.current,{
            opacity:0,
            x:'-=100',
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
function breakOut({gsap,rocketLayer}){
    const timeline = gsap.timeline()
    timeline.to(rocketLayer.current,{
        keyframes:[
            { scale:0.8 },
            {scale:0.6 },
            {scale:0.4 },
            {scale:0.2 },
            {scale:0.1 },
            {scale:0 },
        ],
        x:`-=100`,
        rotate:360
    })
    return timeline
}
