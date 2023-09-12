import gsap from 'gsap'

export function planetEntering({rocket,earthRef,rocketParts}){
    const timeline = gsap.timeline({
        onStart:()=>{
            console.log('start')
            rocketParts.forEach(element => {
                gsap.set(element.current,{
                    position:'absolute',
                })
            });
        },
        onReverseComplete:()=>{
                rocketParts.forEach(element => {
                    gsap.set(element.current,{
                        position:'relative',
                    })
                });
        }
    })
    timeline.add(rocketMinimizing({rocket}))
    timeline.add(earthEntering({earthRef}))
    timeline.add(rocketEntering({rocket,earthRef}))
    return timeline
}

function rocketMinimizing({rocket}){
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        scale:1,
        x:'-=10',
        y:'-=400'
    })
    return timeline
}

function earthEntering({earthRef}){
    const timeline = gsap.timeline()
    timeline.fromTo(earthRef.current,{
        scale:0,
        x:'+=100',
        rotate:'-60'
    },{
        scale:1,
        x:'-=100',
        rotate:'0'
    })
    return timeline
}

function rocketEntering({rocket,earthRef}){
    earthRef.current.style.position = 'relative'
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        width:'fit-content',
        zIndex:20,
        transformOrigin: "50% 50%",

    })
    return timeline
}