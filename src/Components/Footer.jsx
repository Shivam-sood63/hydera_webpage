import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white flex items-center justify-center w-full p-9 '>
      <div className=' ml-15 text-center lg:w-[80%] lg:flex items-center justify-evenly'>
        <div className='w-[50%]'>
            <img src="src/assets/Frame.png" alt="" className='w-[]'/>
        </div>
        <div className='w-[100%] list-none md:w-[100%] lg:w-[50%]'>
           <div className='text-center list-none w-[50%] leading-7'>
                
                <p>ABOUT</p>
                 <p>SERVICES</p>
                  <p>TECHNOLOGIES</p>
                   <p>HOW TO</p>
                   <p>JOIN HYDRA</p>
           </div>
        </div>
        <div className='list-none w-[50%]'>
          <div className='list-none w-[50%] leading-7 ml-3 text-center'>
               
                 <p>F.A.Q</p>
                 <p>SITEMAP</p>
                  <p>CONDITIONS</p>
                   <p>LICENSES</p>
                   
                </div>
        </div>
        <div className='w-[50%] leading-7 '>
            <p className=''>SOCIALIZE WITH HYDRA</p>
            <p className=''>Shivsood2005@gmail.com</p>
            <button className='sm:text-xs sm:p-3 bg-gray-600 lg:px-4 lg:py-2 rounded-full text-sm mt-3 hover:bg-gray-400 hover:text-black'>Contact</button>
        </div>
        
      </div>
      
      
    </div>
    
    
    
  )
}

export default Footer
