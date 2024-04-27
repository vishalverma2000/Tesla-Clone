import React from "react";

const Modal = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[17%] text-center">
        <h1 className="text-4xl font-bold mb-1">Model Y</h1>
        <h3 className="text-lg font-semibold">From $29,490</h3>
        <p className="text-xs">After Federal Tax Credit & Est. Gas Savings</p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm absolute inset-x-0 bottom-[7%]">
        <div className="flex flex-col md:flex-row gap-2">
          <button className="bg-[#ffffff] rounded-md w-[28rem] md:w-64 lg:mx-4 h-10 mt-2 font-bold">
            Order Now
          </button>
          <button className="bg-[#222222] text-[#eeeeee] bg-opacity-65 rounded-md w-[28rem] md:w-64 lg:mx-4 h-10 mt-2 font-bold">
            Demo Drive
          </button>
        </div>

        <p className="mt-3 md:mt-8 text-xs text-[#171a20] w-[25rem] md:w-[32rem] text-center md:text-none">
          *Price before incentives is $42,990, excluding taxes and fees. Subject
          to change.
        </p>
        <p className="text-xs border-b border-black">
          Learn about est. gas savings.
        </p>
      </div>
    </div>
  );
};

export default Modal;
