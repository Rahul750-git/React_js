import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Button = () => {
  const [Theme, setTheme] = useContext(ThemeDataContext);
  const changetheme = () => {
    setTheme("dark");
  };
  return (
    <div>
      <button
        onClick={
          changetheme
        }
      >
        Mode
      </button>
    </div>
  );
};

export default Button;
