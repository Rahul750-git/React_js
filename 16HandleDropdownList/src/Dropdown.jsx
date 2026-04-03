import { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Delhi");
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }
  return (
    <div>
      <h1>Selected Option: {selectedOption}</h1>
      <select onChange={handleChange} defaultValue={"Delhi"}>
        <option value="-1">Select an option</option>
        <option value="Delhi">
          Delhi
        </option>
        <option value="Mumbai">
          Mumbai
        </option>
        <option value="Raipur">
          Raipur
        </option>
        <option value="Chennai">
          Chennai
        </option>
        <option value="Goa">
          Goa
        </option>
        <option value="Rajasthan"
        >
          Rajasthan
        </option>
      </select>
    </div>
  );
}


export default Dropdown;