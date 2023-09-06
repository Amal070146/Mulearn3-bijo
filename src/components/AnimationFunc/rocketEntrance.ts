export function rocketEntrance(props){
    const {gsap,slider,rocket}=props
    const anim=gsap.timeline({
      scrollTrigger: {
        trigger: slider.current,
        start: "100 bottom-=300",
        end: "bottom bottom",
        scrub: 3,
      }
    });
      anim.fromTo(rocket.current , {
        opacity: 0,y:1000,
      }, {
        duration: 1.5, opacity: 1,y:50,
        ease: "ease.in",
      })
      
    return anim
  }