import { useState } from "react";
import "./style.css";
function App() {
  let [Color, setColor] = useState("white");

  return (
    <div className="h-screen" style={{ backgroundColor: Color }}>
     
            <button
        onClick={() => setColor("red")}
        style={{ backgroundColor: "red" }}
        className="m-5 border-2 cursor-pointer rounded-md " 
      >
        Red
      </button>
     

      <button
        onClick={() => setColor("green")}
        style={{ backgroundColor: "green" }}
        className="m-5 border-2 bg-green-600"
      >
        Green
      </button>
      <button
        onClick={() => setColor("blue")}
        style={{ backgroundColor: "blue" }}
        className="m-5 border-2 bg-blue-600 text-white"
      >
        Blue
      </button>
    </div>
  );
}

export default App;
