import React from "react";

const Sections = ({
  imageUrl,
  title,
  price,
  desc,
  primaryDetails,
  learn,
  textcolor,
  underline,
  titleColor,
}) => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-[17%] inset-x-0 text-center">
        <h1 className={`text-4xl font-bold mb-1 ${titleColor}`}>{title}</h1>
        <h3 className="text-lg font-semibold">{price}</h3>
        <p className={`text-xs ${titleColor}`}>{desc}</p>
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

        <p
          className={`mt-3 md:mt-8 text-xs ${textcolor} w-[25rem] md:w-[36rem] text-center md:text-none`}
        >
          {primaryDetails}
        </p>
        <p className={`text-xs ${textcolor} ${underline}`}>{learn}</p>
      </div>
    </div>
  );
};

export default Sections;
