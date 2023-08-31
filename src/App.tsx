
import "./App.css";

import Rocket from "./components/Rocket";


export default function Scene() {
  return (
    <div className="App" >
      <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <Rocket/>
      <div  className="lastContainer">Last Container</div>
    </div>
  );
}
