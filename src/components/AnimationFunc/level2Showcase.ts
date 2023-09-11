export function level2Showcase({gsap,rocketLayer2,levelPointer,descLevel2,dummy,setLevel,rocket}){
    const timeline = gsap.timeline({
        onStart:()=>{setLevel('2')},
        onReverseComplete:()=>{setLevel('1') },
    })
    timeline.add(enlargeRocket({gsap,rocket}))
    timeline.add(setUplevelPointerLocation({gsap,levelPointer}))
    timeline.add(setUpDescriptionLevel1({gsap,descLevel2}))
    timeline.add(disAppear({gsap,descLevel2,levelPointer,dummy}))
    timeline.add(breakOut({gsap,rocketLayer2}))
    return timeline
}
function enlargeRocket({gsap,rocket}){
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        scale:'+=0.5',
        y:'+=100'
    })
    return timeline
}
function setUplevelPointerLocation({gsap,levelPointer}){
    const timeline = gsap.timeline()
    timeline.to(levelPointer.current,{
        opacity:1,
    })
    return timeline
}

function setUpDescriptionLevel1({gsap,descLevel2}){
    const timeline = gsap.timeline()
   
        timeline.to(descLevel2.current,{
            opacity:0,
            x:'-=100',
        }).to(descLevel2.current,{
            opacity:1,  
        })
    
    return timeline
}

function disAppear({gsap,descLevel2,levelPointer,dummy}){
    const timeline = gsap.timeline()
    const play={
        opacity:0,
        x:'+=100',
    }
    timeline.from(dummy.current,{opacity:0})
    timeline.to(dummy.current,play)
    .to(dummy.current,play)
    .to(descLevel2.current,play)
    .to(levelPointer.current,play)
    return timeline
}
function breakOut({gsap,rocketLayer2}){
    const timeline = gsap.timeline()
    timeline.to(rocketLayer2.current,{
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
