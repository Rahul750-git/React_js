import User from "./User";
import Collage from "./Course";
import Clock from "./Clock";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red")
  console.log(color);
  

  // let name = "john"
  // let age = 30
  // let city = "new york"

  let obj = {
    name: "john",
    age: 30,
    city: "new york",
    phone: 1234567890,
    address: "123 main st",
  };

  let obj2 = {
    name: "jane",
    age: 25,
    city: "los angeles",
    phone: 9876543210,
    address: "456 oak ave",
  };
  let coursename = [
    "react js",
    "angular js",
    "vue js",
    "java script",
    "html",
    "css",
    "node js",
    "express js",
    "mongodb",
    "sql",
    "python",
    "java",
  ];

  return (
    <div>
      <h1>Props in React</h1>
      {/* <User name="john" age={30} city="new york"/> */}
      {/* <User name={name} age={age} city={city}/> */}
      <hr />
      <User {...obj} />
      <hr />
      <User {...obj2} />
      <hr />
      <Collage coursename={coursename} />
      <div >
        <h1>Digital Clock</h1>
        <select id="sel" onChange={(e) => setColor(e.target.value)}>
        <option value={"pink"}>select a option</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
          <option value={"red"}>Red</option>
          <option value={"orange"}>Orange</option>
        </select>
      </div>

      <Clock color={color}/>
    </div>
  );
}

export default App;
