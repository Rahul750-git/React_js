import { useState } from "react";
import Counter from "./component/Counter";
import './index.css';

function App() {
  // const [fruit, setFruit] = useState("Apple")

  // const changeFruit = () => {
  //   setFruit("Banana")
  // }
  // const  [a ,setA] = useState(0)

  // function change(){
  //   setA (1) 
    
  // }
  return (
    <div>
      {/* <h1>UseState Example</h1>
    <h1>{fruit}</h1>
    <button onClick={changeFruit}>Change Fruit</button>
    */}

    {/* <h1>Value of {a}</h1>
    <button onClick={change}>Click</button> */}
    <Counter></Counter>
    </div>
  );
}

export default App;
