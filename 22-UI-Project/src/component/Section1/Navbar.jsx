import React from "react";

const Navbar = () => {
  return (
    <div
      className="flex items-center 
    justify-between px-18
    py-8 "
    >
      <h4 className="bg-black text-white 
      rounded-full px-6  py-2 uppercase">
        Target Audience
      </h4>
      <button className="bg-gray-200 px-6
       py-2 text-sm tracking-wider uppercase rounded-full">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
