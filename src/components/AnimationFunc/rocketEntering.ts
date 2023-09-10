export function rocketEntering({ gsap,rocket ,levelPointer}) {
    const timeline = gsap.timeline()
    const mediaQuery = gsap.matchMedia()
    if (rocket.current){
        mediaQuery.add({
            isLandscape: '(orientation:landscape)',
            isPortrait: '(orientation:portrait)',
            },(context)=>{
              const {isLandscape, isPortrait}=context.conditions
              timeline.fromTo(rocket.current, {  
                transform: isLandscape?"translate(-75%, 100%)":isPortrait?"translate(0%, 100%)":"translate(-75%, -50%)",  
            },{
                transform: isLandscape?"translate(-75%, -50%)":isPortrait?"translate(0%, -50%)":"translate(-75%, -50%)",
            }).to(levelPointer.current,{
                scale:()=>{
                    if(isPortrait)
                    return 2
                }
            })
            })
    }
    
    return timeline
}

