import React, { useState } from "react";
function Checkbox() {
  const [skills, setSkills] = useState([]);
  const handleChange = (event) => {
    console.log(...skills, event.target.value);

    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item != event.target.value));
    }
  };

  return (
    <div>
      <form>
        <h3>Select Skills</h3>
        <input type="checkbox" id="php" value="php" onChange={handleChange} />
        <label htmlFor="php">PHP</label>
        <br />
        <input type="checkbox" id="css" value="css" onChange={handleChange} />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="checkbox"
          id="javascript"
          value="javascript"
          onChange={handleChange}
        />
        <label htmlFor="javascript">JavaScript</label>
        <h1> {skills.toString()}</h1>
      </form>
    </div>
  );
}

export default Checkbox;
