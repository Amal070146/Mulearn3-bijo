import { desc as description } from "./support";
import './Frame.css'
const Frame = ({level,desc=description,refer}:{level:string,desc?:string,refer:null|React.RefObject<HTMLDivElement>}) => {
    return (
        <div className="frame" ref={refer}>
            <div className="text-wrapper">Level {level}</div>
            <p className="basic-enablement">{desc}</p>
        </div>
    );
};

export default Frame