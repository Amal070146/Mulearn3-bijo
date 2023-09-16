
import "./App.css";
import Journey from "./components/Journey/Journey";



export default function Scene() {
  return (
    <div className="App" >
      <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <Journey/>
      <div  className="lastContainer">Last Container</div>
    </div>
  );
}
