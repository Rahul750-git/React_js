import { useState } from "react";
function Drop(){
      const [color, setColor] = useState("red")
  console.log(color);
    return(
        <div>
             <h1>Digital Clock</h1>
        <select id="sel" onChange={(e) => setColor(e.target.value)}>
        <option value={"pink"}>select a option</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
          <option value={"red"}>Red</option>
          <option value={"orange"}>Orange</option>
        </select>
        </div>
    )
}
export  default Drop;