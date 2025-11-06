import React from "react";
import group from "../assets/group2.png"
import group1 from "../assets/group3.png"
import group2 from "../assets/group4.png"
import group3 from "../assets/group5.png"

const Sim = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black text-white p-7">
      <div className=" lg:w-[80%] lg:flex items-center justify-center text-sm text-center gap-3 md:block md:items-center md:justify-center">
        <div className="">
          <img src={group} alt="" className="inline-block"/>
          <h2 className="text-xl p-2">SIMULATION</h2>
          <p className="p-2">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="bg-gray-400 text-black hover:bg-gray-500 hover:text-white px-5 py-2 rounded-full">TRY IT NOW</button>
        </div>
       <div>
          <img src={group1} alt=""className="inline-block" />
          <h2 className="text-xl p-2">SIMULATION</h2>
          <p className="p-2">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="px-5 py-2 rounded-full bg-gray-400 text-black hover:bg-gray-500 hover:text-white">TRY IT NOW</button>
        </div>
        <div>
          <img src={group2} alt="" className="inline-block" />
          <h2 className="text-xl p-2">SIMULATION</h2>
          <p className="p-2">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="px-5 py-2 rounded-full bg-gray-400 text-black hover:bg-gray-500 hover:text-white">TRY IT NOW</button>
        </div>
        <div>
          <img src={group3} alt="" className="inline-block"/>
          <h2 className="text-xl p-2">SIMULATION</h2>
          <p className="p-2">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="px-5 py-2 rounded-full bg-gray-400 text-black hover:bg-gray-500 hover:text-white">TRY IT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Sim;
