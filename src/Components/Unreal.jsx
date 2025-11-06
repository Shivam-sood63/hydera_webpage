import React from 'react'
import hydra1 from "../assets/Hydra_Tech1.png"
import hydra2 from "../assets/Hydra_Tech2.png"
import hydra3 from "../assets/Hydra_Tech3.png"
import hydra4 from "../assets/Hydra_Tech4.png"

const Unreal = () => {
  return (
    <div className='bg-black flex items-center justify-center w-full'>
      <div className='w-[80%] flex items-center justify-center gap-4'>
        <div>
            <img src={hydra1} alt="" />
        </div>
         <div>
            <img src={hydra2} alt="" />
        </div>
         <div>
            <img src={hydra3} alt="" />
        </div>
         <div>
            <img src={hydra4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Unreal
