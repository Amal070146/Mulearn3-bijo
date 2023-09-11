export function level3Showcase({gsap,rocketLayer,levelPointer,description,dummy,setLevel}){
    const mediaQuery = gsap.matchMedia()

    const timeline = gsap.timeline({
        onStart:()=>{setLevel('3')},
        onReverseComplete:()=>{
            setLevel('2')
            mediaQuery.add({
                isLandscape: '(orientation:landscape)',
                isPortrait: '(orientation:portrait)',
            },(context)=>{
                const {isPortrait }=context.conditions
        gsap.set(description.current,{ y:isPortrait?'-=100':'-=200'})
    })
    },
    })
    
    timeline.add(setUplevelPointerLocation({gsap,levelPointer}))
    timeline.add(setUpDescriptionLevel1({gsap,description}))
    timeline.add(disAppear({gsap,description,levelPointer,dummy}))
    timeline.add(breakOut({gsap,rocketLayer}))
    return timeline
}

function setUplevelPointerLocation({gsap,levelPointer}){
    const timeline = gsap.timeline()
    timeline.fromTo(levelPointer.current,{
        opacity:0,
    },{
        opacity:0,
        x:'-=100',
        y:'-=100'
    }).to(levelPointer.current,{
        opacity:1,
    })
    return timeline
}

function setUpDescriptionLevel1({gsap,description}){
    const timeline = gsap.timeline()
    const mediaQuery = gsap.matchMedia()
    mediaQuery.add({
        isLandscape: '(orientation:landscape)',
        isPortrait: '(orientation:portrait)',
    },(context)=>{
        const {isLandscape}=context.conditions
        timeline.fromTo(description.current,{
            opacity:0,
            transform:isLandscape?'translate(0%, 0%)':'translate(50%, -100%)'
        },{
            opacity:0,
            x:isLandscape?'-=50':'+=0',
            y:isLandscape?'-=275':'-=170',
            transform:isLandscape?'translate(0%, 0%)':'translate(50%, -150%)',
        }).to(description.current,{
            opacity:1,  
        })
    })
    
    return timeline
}

function disAppear({gsap,description,levelPointer,dummy}){
    const timeline = gsap.timeline()
    const play={
        opacity:0,
        x:'+=100',
    }
    timeline.from(dummy.current,{opacity:0})
    timeline.to(dummy.current,play)
    .to(dummy.current,play)
    .to(description.current,play)
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
