import React from "react";
import maskgroup from "../assets/Maskgroup.png"

const Banner = () => {
  return (
    <div className="flex items-center justify-center w-full p-9 bg-black text-white">
      <div className="w-[75%] lg:flex items-center justify-center md:block gap-8">
      <div className="mb-9 lg:w-[50%] md:w[100%] md:mb-9">
        <h1 className="text-3xl lg:text-6xl font-bold">
          Dive Into The Depths
          Of Virtual Reality
        </h1>
        <p className="text-sm sm:m-2 lg:py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
        <button className="mt-3 lg:text-sm px-5 py-2 bg-white text-black hover:bg-gray-700 hover:text-white rounded-2xl">BUILD YOUR WORLD</button>
      </div>
      <div className="lg:w-[50%] flex items-center justify-center md:w[100%]">
        <img src={maskgroup} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Banner;
