import React from "react";
import location from "../assets/Location_Icon.png"
import mail from "../assets/mail.png"
import phone from "../assets/phone_call.png"

const Payus = () => {
  return (
    <div className="w-full flex items-center justify-center  text-white bg-black">
      <div className="w-[87%] md:block lg:flex items-center justify-center text-sm text-center gap-4 ">
        <div className="mb-3 md:[10%] md:mb-4 lg:w-[30%] align-middle bg-gray-800 flex items-center justify-center rounded-full p-3">
            <img src={location} alt="" className="w-10 md:w-14 lg:w-14" />
            <div>
            <h1>Pay Us a Visit</h1>
            <p className="text-xs">Union St, Seattle, WA 98101, United States</p>
            </div>
        </div>
        <div className="mb-3 md:[10%] md:mb-4 lg:w-[30%] flex items-center justify-center rounded-full p-3 bg-gray-800">
            <img src={mail} alt="" className="w-10 md:w-14 lg:w-14" />
            <div>
            <h1>Pay Us a Visit</h1>
            <p className="text-xs">Union St, Seattle, WA 98101, United States</p>
            </div>
        </div>
        <div className="mb-3 md:[10%] md:mb-4 lg:w-[30%] flex items-center justify-center rounded-full p-3 bg-gray-800">
            <img src={phone} alt="" className="w-10 md:w-14 lg:w-14" />
            <div>
            <h1>Pay Us a Visit</h1>
            <p className="text-xs">Union St, Seattle, WA 98101, United States</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Payus;
