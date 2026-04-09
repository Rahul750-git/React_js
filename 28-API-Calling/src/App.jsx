import axios from "axios";
import { useState } from "react";
function App() {
  // async function getData() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1",
  //   );
  //   console.log(response);
  // }
  // Arrow Function & Fetch Api
  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1",
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };

  const [Data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>GetData</button>
      <div>
        {Data.map(function (idx) {
          return <h2 > hello </h2>;
        })}
      </div>
    </div>
  );
}

export default App;
