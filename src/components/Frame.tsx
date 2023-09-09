import { desc as description } from "./support";
import './Frame.css'
const Frame = ({level,desc=description,refer,classname}:{level:string,desc?:string,refer:null|React.RefObject<HTMLDivElement>,classname:string}) => {
    return (
        <div className={`frame ${classname}`} ref={refer}>
            <div className="text-wrapper">Level {level}</div>
            <p className="basic-enablement">{desc}</p>
        </div>
    );
};

export default Frame