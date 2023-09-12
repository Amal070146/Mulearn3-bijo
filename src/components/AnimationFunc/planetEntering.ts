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
    timeline.add(rocketRotateAround({rocket,earthRef}))
    return timeline
}

function rocketMinimizing({rocket}){
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        scale:1,
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
    // const d="M389.604 840.395C172.748 821.436 2.71144 641.583 2.71146 422.511C2.71148 190.809 192.921 2.9765 427.557 2.97653C662.192 2.97655 852.402 190.809 852.402 422.511C852.402 642.983 680.185 823.733 461.347 840.738" 
    const timeline = gsap.timeline()
    timeline.to('.rocket',{
        onStart:()=>{
            console.log('onStart')
            const p=MotionPathPlugin.getRelativePosition(rocket.current,earthRef.current,[0,0],[-0.5 ,0.5],)
            gsap.to(rocket.current,{ 
                x:'+='+p.x, y:'+='+p.y ,
            })
        }
    })
    return timeline
}

function rocketRotateAround({rocket,earthRef}){
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        rotate:180,
        zIndex:500
    })
    // .to(rocket.current,{
    //     keyframes:[{
    //         x:'+=0',
    //         y:'+=0',
    //         rotate:180
    //     },{
    //         y:'+='+earthRef.current.offsetHeight/2,
    //         rotate:270
    //     }]  
    // })
    return timeline
}