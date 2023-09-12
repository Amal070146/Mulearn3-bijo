import gsap from 'gsap'
export function enlargeRocket(rocket: { current: gsap.TweenTarget }){
    const timeline = gsap.timeline()
    timeline.to(rocket.current,{
        scale:'+=0.2',
        yPercent:'+=20'
    })
    return timeline
}