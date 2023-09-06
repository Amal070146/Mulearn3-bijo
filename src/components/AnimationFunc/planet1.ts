export function planet1(props){
    const {earthWay,rocket,gsap}=props
    const anime=gsap.timeline({
        scrollTrigger: {
            trigger: props.slider.current,
            start: "5200",
            end: "6000",
            scrub: 5,
        }
    })
    .fromTo(earthWay.current ,
        { xPercent:300, yPercent:-50,scale:0.3,opacity:0,rotate:0},
        { rotate:60,xPercent:150 , yPercent:15,scale:1,opacity:1,duration:2},'+=1')
    .to(rocket.current,
        {rotate:90, zIndex:1,xPercent: 60,yPercent :-55,scale:1,duration:2,},'-=2')
    .to(earthWay.current,
        { xPercent:-50, yPercent:0,scale:0,rotate:120,duration:2},'+=2')
    .to(rocket.current,
        {duration:2,scale:2},'-=2')
    return anime
}