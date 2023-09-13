import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin';
export function planetEntering({rocket,earthRef,rocketParts}){
    const timeline = gsap.timeline({
        onStart:()=>{
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
        scale:0.5,
        x:'-=10',
        y:'-=100'
    })
    return timeline
}

function earthEntering({earthRef}){
    const timeline = gsap.timeline({
     
    })
    timeline.fromTo(earthRef.current,{
        scale:0,
        rotate:'-60',
        xPercent:'+=50',
    },{
        scale:1,
        rotate:'0',
        xPercent:'+=50',
        yPercent:'-=50'
    })
    return timeline
}

function rocketEntering({rocket,earthRef}){
    const timeline = gsap.timeline({
        onUpdate:()=>{
            const p=MotionPathPlugin.getRelativePosition(rocket.current,earthRef.current,[0.5,0.5],[0,0.5],)
            gsap.to(rocket.current,{ 
                x:'+='+p.x, y:'+='+p.y ,
                zIndex:100,
            })
        }
    })
    return timeline
}




