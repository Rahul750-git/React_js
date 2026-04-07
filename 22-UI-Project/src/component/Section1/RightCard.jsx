import React from "react";
import { ArrowRight } from "lucide-react";
const RightCard = () => {
  return (
    <div className="h-155 w-80 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover "
        src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between bg-amber-400">
        <h2 className="bg-white rounded-full text-2xl font-semibold h-10 w-10 flex justify-center items-center">
          1
        </h2>
        <div>
          <p className="text-lg leading-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            ipsum dolor sit amet consectetur adipisicing elitiure.
          </p>
        </div>
        <button>Satisfied</button>
        <button>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default RightCard;
