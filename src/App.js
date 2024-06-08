import { useState } from "react";
import "./App.css";

const hexclr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function App() {
  const [clrCode, setClrCode] = useState("#5F9EA0");

  const handleClrChange = () => {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hexclr[rndmNmbr()];
    }
    setClrCode(hexcolor);
  };

  const rndmNmbr = () => {
    return Math.floor(Math.random() * hexclr.length);
  }

  return (
    <div className="wrapperMain" style={{ backgroundColor: clrCode }}>
      <div className="wrapper">
        <div className="top">
          <h1 className="colorCode" /*style={{ color: clrCode}}*/>{clrCode}</h1>
          <span>(Color Code)</span>
        </div>
        <div className="bottom">
          <p>Click the button to change the background color.</p>
          <button onClick={handleClrChange}>Click Here</button>
        </div>
      </div>
    </div>
  );
}

export default App;
