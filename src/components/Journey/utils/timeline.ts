import gsap from 'gsap'
export const timeline=(setLevel)=>{
    setLevel(3  )
    const tl=gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('.Journey'),    
            start: 'top top',
            end: 'bottom top',
            markers: true,
            pin: true,
            scrub: true,
        }
    })
    tl.to('.earth', {
        rotate: 360
    })
    return tl
}