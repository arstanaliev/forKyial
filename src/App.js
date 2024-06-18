import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import video from "./video.mp4"

function App() {
  let [click, setClick] = useState(false)
  return (
    <div className="App">
      <div>
        <button onClick={() => setClick(!click)}>ушуну бас боло</button>
      </div>
      <div>
        <video src={video} style={{
            display: click ? "block" : "none"
        }} controls></video>
      </div>
    </div>
  );
}

export default App;
