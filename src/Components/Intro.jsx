import React from "react";

const Intro = () => {
  return (
    <div className="h-screen lg:h-60 flex w-full  items-center justify-center bg-black text-white">
      <div className="block sm:items-center sm:justify-center md:block md:items-center md:justify-center lg:w-[80%] h-[40vh] lg:flex items-center justify-center">
        <div className="sm:block md:text-center sm:items-center sm:justify-center md:w-full lg:w-[50%] text-center md:flex md:items-center md:justify-center">
          <h1 className="text-3xl font-bold py-3">
            INTRODUCTION <br />
           <span className="font-normal"> TO HYDRA VR</span>
          </h1>
          <img src="src\assets\Component 1.png" alt="" className="inline-block " id="sk" />
        </div>
        <div className="px-9 md:w-full md:px-9 lg:w-[50%] text-center">
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
