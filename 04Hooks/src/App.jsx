import { useState } from "react";
function App() {
  let [count, setCount] = useState(4);

  // let count = 4;

  const addValue = () => {
    setCount(count + 1);
  };

  const subtractValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter value can be negative");
    }
  };

  return (
    <>
      <h1 style={{ color: "red",
       backgroundColor: "lightgrey" }}>
        Hello React{" "}
      </h1>
      <h3>Counter value : {count}</h3>

      <button
        onClick={addValue}
        style={{ backgroundColor: "lightgrey",
         margin: "10px" }}
      >
        Increment value
      </button>
      <br />
      <button
        onClick={subtractValue}
        style={{ backgroundColor: "lightgrey",
         margin: "10px" }}
      >
        Decrement value
      </button>
    </>
  );
}

export default App;
