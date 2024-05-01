import React from "react";
import Navbar from "./Navbar";
const Main = () => {
  return (
    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png')] h-screen bg-cover bg-center">
      <Navbar />
      <div className="absolute inset-x-0 top-[17%] text-center">
        <h1 className="text-4xl font-bold mb-1">Model Y</h1>
        <h3 className="text-lg font-semibold">From $29,490</h3>
        <p className="text-xs">After Federal Tax Credit & Est. Gas Savings</p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm absolute inset-x-0 bottom-[7%]">
        <div className="flex flex-col md:flex-row gap-2">
          <a href="https://www.tesla.com/modely/design#overview">
            <button className="bg-[#ffffff] rounded-md w-[28rem] md:w-64 lg:mx-4 h-10 mt-2 font-bold">
              Order Now
            </button>
          </a>
          <a href="https://www.tesla.com/drive?selectedModel=modely">
            <button className="bg-[#222222] text-[#eeeeee] bg-opacity-65 rounded-md w-[28rem] md:w-64 lg:mx-4 h-10 mt-2 font-bold">
              Demo Drive
            </button>
          </a>
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

export default Main;
