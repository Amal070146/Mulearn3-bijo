import gsap from 'gsap'

export function breakOut(rocketLayer: { current: gsap.TweenTarget }){
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

export function vibrate(rocket: { current: gsap.TweenTarget }){
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        keyframes:[
            {x:'-=1',rotate:'-=1'},
            {x:'+=1',rotate:'+=1'},
        ],
        yoyo:true,
        repeat:5,
        duration:0.5
    })
    return timeline
}

