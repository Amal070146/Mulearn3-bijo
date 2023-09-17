import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
interface ThreeDProps {
  Journey: React.RefObject<HTMLElement>
}
const ThreeD: React.FC<ThreeDProps> = ({Journey}) => {
  return (
    <Canvas camera={{ position: [0, 0, 0]}} >
        <Stars  radius={300} />
        <CanvasAnimation Journey={Journey}/>
    </Canvas>
  )
}
const CanvasAnimation: React.FC<ThreeDProps>= ({Journey}) => {
  const {camera} = useThree()
  const tl=gsap.timeline({ scrollTrigger: {
    trigger: Journey.current ,
    start: 'top top',
    end: 'bottom+=3000 top',
    scrub: true
  }})
  tl.fromTo(camera.position, {
    y:-300
  },{
    y:300
  })
  return (
    <group></group>
  )
}

export default ThreeD