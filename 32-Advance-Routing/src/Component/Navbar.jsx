import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex py-4 items-center px-8 bg-cyan-900  justify-between">
      <img
        className="h-10 flex absolute  "
        src="https://eadn-wc01-4759120.nxedge.io/cdn/media/catalog/product/cache/9279c5d3a457b943e3ea82ec39e01d6b/b/l/blue_heaven_logo.png"
      />
      <h2 className="font-semibold ms-12 text-pink-600  text-2xl ">
        Blue Heaven
      </h2>
      <div className="  flex gap-8">
        <Link className="font-semibold text-xl  text-pink-600 " to="/">
          Home
        </Link>
        <Link className="font-semibold text-lg  text-pink-600  " to="/product">
          Product
        </Link>
        <Link className="font-semibold text-lg  text-pink-600  " to="/about">
          About
        </Link>
        <Link className="font-semibold text-lg text-pink-600  " to="/contact">
          Contact
        </Link>
        <Link className="font-semibold text-lg text-pink-600 " to="/course">
          Course
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
