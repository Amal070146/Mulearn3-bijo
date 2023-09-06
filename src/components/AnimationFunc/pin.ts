export function setFrames(props) {
    const {descLevel1,descLevel2,descLevel3,descLevel4,pathWay,slider,gsap}=props
    const gs=[descLevel1,descLevel2,descLevel3,descLevel4,pathWay]
    const anim=gsap.timeline();
    anim.from(slider.current, { scrollTrigger: { trigger: slider.current,start: "top 0",end: "+=8000",scrub: 3,pin: true}})
    gs.forEach((ref)=>{anim.fromTo(ref.current, {scale:0},{scale:0})})
    return anim
  }