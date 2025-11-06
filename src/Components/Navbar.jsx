import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navcontainer w-100% flex items-center justify-center bg-black'>
      <nav className='flex md:flex md:justify-start lg:flex w-[90%] lg:items-center lg:justify-around'>
        <div className='flex items-center justify-startr'>
        <img src="src\assets\Frame.png" alt=""  className='w-[25%] sm:w-[30%] lg:w-[40%] p-1'/> 
        <img src="src\assets\Frame (1).png" alt="" className='w-[25%] sm:w-[30%] lg:w-[40%] p-1' />
        
        </div>
        <div className=''>
        <ul className=' hidden md:hidden lg:flex gap-6 text-sm text-white cursor-pointer'>
          <NavLink to='/'>
                  <li className='hover:text-purple-300'>ABOUT</li>
            </NavLink>
          
           <NavLink to='/Services'>
                 <li className='hover:text-purple-300'>SERVICES</li>
            </NavLink>
          
              <NavLink to='/About'>
                  <li className='hover:text-purple-300'>TECHNOLOGIES</li>
            </NavLink>

             <NavLink to='/Contact'>
                  <li className='hover:text-purple-300'>HOW TO</li>
            </NavLink>
           
           
           
        </ul>
        </div>
        <div className='hidden md:hidden lg:block'>
        <button className='bg-gray-600 hover:bg-gray-500 hover:text-black text-white px-4 py-2 rounded-4xl mx-3 text-sm border-white'>CONTACT US</button>
        <button className='bg-gray-300 hover:bg-gray-700 hover:text-white text-black px-4 py-2 rounded-4xl text-sm'>JOIN HYDRA</button>
        
        </div>
        <a href="" className='lg:hidden text-white flex items-center justify-center absolute right-8 top-4 text-2xl'><i class="fa-solid fa-bars"></i></a>
      </nav>
    </div>
  )
}

export default Navbar
