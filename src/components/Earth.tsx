
const Earth = ({refer,className,lineRef,circleRef}) => {
  return (
  <div className={className} ref={refer}>
    <svg   viewBox="0 0 840 840" fill="none" preserveAspectRatio="xMidYMid meet">
    <path ref={circleRef} stroke="black" strokeWidth="5" />

    <rect x="62.3423" y="62.252" width="716" height="715" fill="url(#pattern0)"/>
    {/* <line  x1="425.342" y1="0.217285" x2="425.342" y2="419.752" stroke="black" stroke-opacity="0.01" strokeWidth="10"/> */}
    <line ref={lineRef}  x1="425.342" y1="0.217285" x2="425.342" y2="419.752" stroke="#C5F600" strokeWidth="10"/>

</svg>
</div>
  )
}

export default Earth