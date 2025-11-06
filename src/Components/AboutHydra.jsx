import React from "react";

const AboutHydra = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black text-white" >
      <div className="block lg:w-[80%] lg:flex bg-black items-center justify-center md:block md:pt-5 sm:pt-5">
        <div className="flex sm:items-center sm:justify-center lg:w-[50%] md:w-[100%] md:flex items-center justify-center">
          <img src="src\assets\Mask group (1).png" alt="" className="w-80" />
        </div>
        <div className="text-center lg:text-left lg:w-[50%] md:w-[100%] md:block sm:items-center sm:justify-center md:text-center p-5">
          <h1 className="text-3xl font-bold">
            ABOUT <br /> <span className="font-normal">HYDRA VR</span>
          </h1>
          <p className="px-6 md:px-6 lg:px-0">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button className="bg-gray-400 mt-2 px-3 py-2 rounded-full hover:bg-gray-500 hover:text-white text-black text-xs">LET’S GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
};

export default AboutHydra;
