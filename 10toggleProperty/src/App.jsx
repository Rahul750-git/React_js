import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <h1>Toggle in React js Example</h1>
      {display ? <h1>Display is True</h1> : null}

      <button onClick={() => setDisplay(!display)}>toggle</button>
    </>
  );
}

export default App;
