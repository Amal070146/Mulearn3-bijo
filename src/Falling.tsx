// import {  useLayoutEffect, useMemo, useRef } from 'react'
// import rocketLevel1 from "../assets/level1.png"
// import rocketLevel2 from "../assets/level2.png"
// import rocketLevel3 from "../assets/level3.png"
// import rocketLevel4 from "../assets/level4.png"
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import './Rocket.css'
// import path from '../assets/path.svg'
// import { setFrames } from './AnimationFunc/pin'
// import { level4Entrance } from './AnimationFunc/level4Entrance'
// import { level1Entrance } from './AnimationFunc/level1Entrance'
// import { intro } from './AnimationFunc/intro'
// import { rocketEntrance } from './AnimationFunc/rocketEntrance'
// import { level3Entrance } from './AnimationFunc/level3Entrance'
// import { level2Entrance } from './AnimationFunc/level2Entrance'
// import Earth from '../assets/earth.svg'
// import { planet1 } from './AnimationFunc/planet1'
// import { planet2 } from './AnimationFunc/planet2'
// import Moon from '../assets/moon.svg'
// const desc=`Basic Enablement Tasks
// This marks the start and the overview of µLearn
// foundation. Ivde enthelum okke data indakki 
// vecho ath aanallo athinde oru maryatha.`
// gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

// const Rocket = () => { 
//     const slider = useRef(null);
//     const pathWay = useRef(null);
//     const rocket = useRef(null);
//     const descLevel1= useRef(null),descLevel2= useRef(null),descLevel3= useRef(null),descLevel4= useRef(null);
//     const journey = useRef(null);
//     const journeyLevel1= useRef(null),journeyLevel2= useRef(null),journeyLevel3= useRef(null),journeyLevel4= useRef(null);
//     const earthWay= useRef(null),moonWay= useRef(null);
//     const props=useMemo(()=>({
//       descLevel1:descLevel1,
//       descLevel2:descLevel2,
//       descLevel3:descLevel3,
//       descLevel4:descLevel4,
//       pathWay:pathWay,
//       journey:journey,
//       gsap:gsap,
//       slider:slider,
//       rocket:rocket,
//       journeyLevel1:journeyLevel1,
//       journeyLevel2:journeyLevel2,
//       journeyLevel4:journeyLevel4,
//       journeyLevel3:journeyLevel3,
//       earthWay:earthWay,
//       moonWay:moonWay
//     }),[descLevel1, descLevel2, descLevel3, descLevel4, pathWay, slider, rocket, journey, journeyLevel1, journeyLevel2, journeyLevel4, journeyLevel3,earthWay])
//     useLayoutEffect(() => {
//         const ctx = gsap.context(() => {
//           const master=gsap.timeline(
//             {scrollTrigger: {
//               trigger: slider.current,
//               start: "top top",
//               end: "bottom bottom",
//             }}
//           );
//           master.add(setFrames(props));
//           master.add(intro(props))
//           master.add(rocketEntrance(props))
//           master.add(level1Entrance(props))
//           master.add(level2Entrance(props))
//           master.add(level3Entrance(props))
//           master.add(level4Entrance(props))
//           master.add(planet1(props))
//           master.add(planet2(props))
//         }) 
//         return () => ctx.revert()
//       },[props])
//   return (
//     <div ref={slider} className="container">
//       <div className="headers" ref={journey}>
//       <div className='header-text'>Journey at µLearn</div>
//       </div>
//       <div ref={rocket} className="rocket" >
//         <div className="part" ref={journeyLevel4}>
//         <img src={rocketLevel4}  alt="rocket" className="rocket-parts"/>
//         </div>
//         <div className="part" ref={journeyLevel3}>
//           <img src={rocketLevel3}  alt="rocket" className="rocket-parts"/>
//         </div>
//         <div className="part" ref={journeyLevel2} >
//           <img src={rocketLevel2}  alt="rocket" className="rocket-parts"/>
//         </div>
//         <div className="part" ref={journeyLevel1}>
//           <img src={rocketLevel1} alt="rocket" className="rocket-parts"/>
//         </div>
//       </div>
//       <div style={{ position: "absolute",height:"40%" }} className="rom" ref={pathWay}>
//         <img src={path} height={"20%"}/>
//       </div> 

//       <Frame level="4" desc={desc} refer={descLevel4}/>
//       <Frame level="3" desc={desc} refer={descLevel3}/>
//       <Frame level="2" desc={desc} refer={descLevel2}/>
//       <Frame level="1" desc={desc} refer={descLevel1}/>
//       <div style={{ position: "absolute",height:"60%" ,}} className="rom" ref={earthWay}>
//         <img src={Earth} height={"90%"}/>
//       </div>
//       <div style={{ position: "absolute",height:"60%" ,}} className="rom" ref={moonWay}>
//         <img src={Moon} height={"90%"}/>
//       </div>
//   </div>
//   )
// }

// export const Frame = ({level,desc,refer}:{level:string,desc:string,refer:null|React.RefObject<HTMLDivElement>}) => {
//     return (
//         <div className="frame" ref={refer}>
//             <div className="text-wrapper">Level {level}</div>
//             <p className="basic-enablement">{desc}</p>
//         </div>
//     );
// };


// export default Rocket