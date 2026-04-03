import { useState } from "react";

function Radio() {
    const [selectedOption, setSelectedOption] = useState("user not selected");


    return (
        <div>
            <h1>Selected Gender: {selectedOption}</h1>

            <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={() => setSelectedOption("Male")}
            />
            <label htmlFor="male">Male</label>
            <br />
            <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={() => setSelectedOption("Female")}
            />
            <label htmlFor="female">Female</label>
        </div>
    );
 
}

   export default Radio;