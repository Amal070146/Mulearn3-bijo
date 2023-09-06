export function intro(props) {
    const {gsap,journey,slider}=props
    const anim=gsap.timeline();
    anim.from(journey.current, {
      duration: 1, opacity: 0, y: -500,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: slider.current,
        start: "top center",
        end: "top bottom",
        scrub: 3,
      }
    })
    return anim
  }