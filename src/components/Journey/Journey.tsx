import './Journey.css'
import './Heading.css'
import Earth from '../../assets/earth.svg'
import Rocket, { LevelDescriptions } from './Rocket/Rocket'

const Journey = () => {
    return (
        <section className='Journey' id='Journey' >
            <JourneyHeading/>
            <JourneyBody />
        </section>
    )
}

const JourneyHeading = () => {
    return(
        <h2 className='header-text' id='journey-header' >
            Journey at µLearn
        </h2>
    )
}

const JourneyBody = () => {
    
    return(
        <div className='journeyBodyContainer'>
            <div className='journeyBody'>
                <img src={Earth} alt="Earth" className='earth'/>
                <Rocket/>
                <LevelDescriptions/>
            </div>
        </div>
    )
}

export default Journey