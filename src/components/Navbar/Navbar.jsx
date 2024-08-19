import { RiApps2AddLine, RiArrowDropDownFill, RiMenuLine } from '@remixicon/react'
import React, { useState , useContext} from 'react'
import {assets} from '../../assets/assets'
import Sidebar from '../Sidebar/Sidebar'
import { Context } from '../../Context/Context'
function Navbar() {

  const [issidebaron,setIsSidebarOn] = useState(false)

  const toggleSidebar = () => {
    console.log(issidebaron)
    setIsSidebarOn(prev => !prev)
  }
  return (
    <>  
        {issidebaron && (
          <>
            <div className='absolute z-10 w-4/5 h-screen bg-zinc-800'>
            
            </div>
          </>
        )}
        <div className='flex bg-zinc-950 h-20 w-full py-4 px-5 justify-between font-gem1 '>
            <div className='flex gap-5 items-center max-[950px]:relative max-[950px]:z-20'>
            <RiMenuLine
              size={52}
              className="m-3 -mx-2 mt-4 block min-[950px]:hidden text-white p-4 rounded-full hover:bg-zinc-800 cursor-pointer"
              onClick={toggleSidebar}
            />
              <span className='text-zinc-300 font-gem2  text-2xl flex items-center cursor-pointer'>Gemini <RiArrowDropDownFill size={36}/></span></div>
            <div className='flex items-center gap-3'>
                <button className='flex gap-2  items-center bg-zinc-700 py-3 px-4 rounded-lg max-[500px]:hidden hover:bg-zinc-600 '>
                    <img src={assets.gemini_icon2} alt="" className='w-4'/>
                    <p className='text-white font-semibold text-xs'>Get Gemini Advanced</p>
                </button>
                <RiApps2AddLine size={40} className='text-white rounded-full hover:bg-zinc-800 p-3 cursor-pointer max-[950px]:relative max-[950px]:z-20'/>
                <img src={assets.user_icon2} alt="user-icon" className='rounded-full w-12 cursor-pointer border-zinc-800 border-solid border-2' />
            </div>
        </div>
    
    </>
  )
}

export default Navbar