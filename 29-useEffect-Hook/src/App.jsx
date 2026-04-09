import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
function App() {
  const [Num, setNum] = useState(0);
  useEffect(() => {
    console.log("Hello");
  }, [Num]);

  return (
    <div>
      <h1>Value {Num}</h1>
      <button
        onClick={() => {
          setNum(Num + 1);
        }}
      >
        Click me{" "}
      </button>
    </div>
  );
}

export default App;
