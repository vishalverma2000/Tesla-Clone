import React from "react";

const Footer = ({ imageUrl, titleColor }) => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-[17%] inset-x-0 text-center">
        <h1 className={`text-4xl font-bold mb-1 ${titleColor}`}>Accessories</h1>
      </div>
      <div className="flex flex-col items-center justify-center text-sm absolute inset-x-0 bottom-[12%]">
        <a href="https://www.tesla.com/modely/design#overview">
          <button className="bg-[#ffffff] rounded-md w-[28rem] md:w-64 lg:mx-4 h-10 mt-2 font-bold">
            Shop Now
          </button>
        </a>
      </div>
      <div className="absolute bottom-[2%] w-full">
        <ul className="flex text-white text-xs gap-4 items-center justify-center">
          <li>Tesla &#169; 2024</li>
          <li>Privacy & Legal</li>
          <li>Vehicle Recalls</li>
          <li>Contact</li>
          <li>News</li>
          <li>Get Updates</li>
          <li>Locations</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
