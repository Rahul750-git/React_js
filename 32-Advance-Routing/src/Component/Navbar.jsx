import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom"
const Navbar = () => {
   const navigate = useNavigate()
  return (
    <div className="flex py-4 items-center px-8 bg-cyan-900  justify-between">
      <div className="flex gap-2 opacity-40">
        <button
          onClick={() => {
          navigate(-1)
        }}
        ><ArrowLeft /></button>
         <button
          onClick={() => {
          navigate(+1)
        }}
         ><ArrowRight /></button>
      </div>
      <img
        className="h-10 flex absolute left-25"
        src="https://eadn-wc01-4759120.nxedge.io/cdn/media/catalog/product/cache/9279c5d3a457b943e3ea82ec39e01d6b/b/l/blue_heaven_logo.png"
      />
      <h2 className=" items-start ms-0 font-semibold absolute left-36   text-pink-600  text-2xl ">
        <i>Blue Heaven</i>
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
