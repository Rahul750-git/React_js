import { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../Context/ThemeContext";

const Navbar = () => {
  const [Theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className={Theme}>
      <h2>Amazon</h2>
      <Nav2 />
    </div>
  );
};

export default Navbar;
