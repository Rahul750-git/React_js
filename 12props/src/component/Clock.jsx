import { useState, useEffect } from "react";

function Clock  (city) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  
  }, []);

  return (
    <div>
      <h1
        style={{
          color:"green",
          backgroundColor: "black",
          width: "120px",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        {time}
      </h1>
      
    </div>
  );
};
export default Clock;
