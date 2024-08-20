import { RiAddLine,RiCircleFill, RiQuestionLine,RiHistoryLine,RiSettings4Line, RiApps2AddLine, RiArrowDropDownFill, RiMenuLine } from '@remixicon/react'
import React, { useState , useContext} from 'react'
import {assets} from '../../assets/assets'
import Sidebar from '../Sidebar/Sidebar'
import { Context } from '../../Context/Context'
import Task from '../Task'
function Navbar() {

  const [issidebaron,setIsSidebarOn] = useState(false)
  const {prevPrompts} = useContext(Context);
  const toggleSidebar = () => {
    console.log(issidebaron)
    setIsSidebarOn(prev => !prev)
  }
  return (
    <>  
        {issidebaron && (
          <>
            <div className='absolute z-10 w-4/5  bg-zinc-900 flex animate-slideIn'>
                      <div className='w-full  h-mobile-sidebar-height flex flex-col items-start pt-28 px-8 '>
                                <button className='flex items-center  bg-zinc-700  px-4 py-2 rounded-full text-zinc-100'>
                                  <RiAddLine size={30}/>
                                  <p>New chat</p>
                                </button>
                                <div className='my-3 pl-5 text-lg'>Recents</div>
                                <div className='w-full flex  px-3 rounded-xl  flex-col  overflow-x-scroll no-scrollbar h-80 mt-3 py-5'>
                                            {/* <Task text='This is a new task'/>
                                            <Task text='This is a new task'/> */}
                                            {prevPrompts.map((taskitem,index) => {
                                                     return  (
                                                    <Task text={taskitem}/>
                                                    )
                                            })}
                                </div>
                           <div className='flex flex-col mt-10 w-full items-center gap-2 ml-4'>
                                <div className="flex gap-4 p-2 pl-3 w-72 items-center mb-0 mr-2  justify-start hover:bg-zinc-800 cursor-pointer rounded-full ">
                                       <RiQuestionLine size={20} className="text-white font-bold" />
                                       <p className="text-white text-sm font-bold">Help</p>
                                         <div className="dot w-2 box-border ml-40 h-2 rounded-full bg-blue-700"></div>
                                </div>
                                <div className="flex gap-4 p-2 pl-3 w-72 items-center mb-0 mr-2  justify-start hover:bg-zinc-800 cursor-pointer rounded-full ">
                                      <RiHistoryLine size={20} className="text-white font-bold" />
                                       <p className="text-white text-sm font-bold">Activity</p>
                                </div>
                                <div className="flex gap-4 p-2 pl-3 w-72 items-center mb-0 mr-2  justify-start hover:bg-zinc-800 cursor-pointer rounded-full ">
                                      <RiSettings4Line size={20} className="text-white font-bold" />
                                       <p className="text-white text-sm font-bold">Settings</p>
                                </div>
                                <div className="location-box mt-8 w-full">
                                      <div className="flex items-center gap-3">
                                            <RiCircleFill size={10} className="text-zinc-700" />
                                             <p className="text-white text-xs">Pune, Maharashtra, India</p>
                                      </div>
                                      <div className="flex text-center">
                                            <p className="text-blue-800 cursor-pointer font-semibold ml-5 mt-1 text-xs ">
                                                  from your IP address Update Location
                                            </p>
                                       </div>
                                </div>
                            </div>
                      </div>
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