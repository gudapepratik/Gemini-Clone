import React, { useCallback, useState, useEffect, useContext } from "react";
import { assets } from "../../assets/assets";
import Task from "../Task";
import './Sidebar.css'
import {
  RiAddLine,
  RiChat4Fill,
  RiChat4Line,
  RiCircleFill,
  RiHistoryLine,
  RiMenu2Line,
  RiMenu4Line,
  RiMenuLine,
  RiQuestionLine,
  RiSettings3Line,
  RiSettings4Line,
} from "@remixicon/react";

import {Context} from '../../Context/Context'

function Sidebar() {
  let [extended, setExtended] = useState(false);
  const [sidewidth, Setsidewidth] = useState("w-24");
  const [classes,setClasses] = useState("")
  const {input,setInput,newChat, prevPrompts,setPreviousPrompts,setToSearchPrompt} = useContext(Context)

  useEffect(() => {
    if (extended) {
      Setsidewidth("w-fit");
      setClasses("")
    } else {
      Setsidewidth("w-24");
      setClasses("items-end pb-12 h-3/5")
    }
  }, [extended]);

  
  return (
    <>
      


      <div className={`top ${sidewidth}  relative h-screen bg-zinc-900 p-2 transition-all duration-500 max-[950px]:hidden`}>
        <RiMenuLine
          size={52}
          className="m-3 mt-4 text-white p-4 rounded-full hover:bg-zinc-800 cursor-pointer"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="flex items-center my-5 gap-0 cursor-pointer"
        onClick={() => newChat()}
        >
          <RiAddLine
            size={40}
            className="ml-4  text-white p-2 rounded-full relative z-20 bg-zinc-950 cursor-pointer"
          />
          {extended ? (
            <p className=" bg-zinc-950 py-2 w-32 flex justify-end px-3 pr-3 rounded-full text-white font-bold relative right-11 -z-1">
              New chat
            </p>
          ) : null}
        </div>
        {extended ? <div className="ml-7 text-white">Recent</div> : null}

        {extended ? (
          <ul className="list-none flex flex-col justify-start pl-4 w-full h-48 overflow-y-scroll no-scrollbar mt-2">
            {/* <Task text="This is new text" active={"True"}/>
            <Task text="This is new text" />
            <Task text="This is new text" />
            <Task text="This is new text" /> */}
            {prevPrompts.map((taskitem,index) => {
              return  (
                  <Task
                  text={taskitem}/>
              )
            })}
          </ul>
        ) : (
          // <div className="h-48"></div>
          null
        )}

        <div className={`bottom flex ml-5 mt-20 ${classes} transition-all duration-500`}>
          <ul className="container flex flex-col">
            <div className="flex gap-4 p-2 pl-3 w-72 items-center mb-0 mr-2  justify-start hover:bg-zinc-800 cursor-pointer rounded-full ">
              <RiQuestionLine size={20} className="text-white font-bold" />
              {extended ? (
                <>
                  <p className="text-white text-sm font-bold">Help</p>
                  <div className="dot w-2 box-border ml-40 h-2 rounded-full bg-blue-700"></div>
                </>
              ) : null}
            </div>
            <div className="flex gap-4 p-2 pl-3 w-72 items-center mb-0 mr-2  justify-start hover:bg-zinc-800 cursor-pointer rounded-full ">
              <RiHistoryLine size={20} className="text-white font-bold" />
              {extended ? (
                <p className="text-white text-sm font-bold">Activity</p>
              ) : null}

              {/* <div className='dot w-2 box-border ml-40 h-2 rounded-full bg-blue-700'></div> */}
            </div>
            <div className="flex gap-4 p-2 pl-3 w-72 items-center mb-0 mr-2 justify-start hover:bg-zinc-800 cursor-pointer rounded-full ">
              <RiSettings4Line size={20} className="text-white font-bold" />
              {extended ? (
                <p className="text-white text-sm font-bold">Settings</p>
              ) : null}
              {/* <div className='dot w-2 box-border ml-40 h-2 rounded-full bg-blue-700'></div> */}
            </div>
          </ul>
        </div>

        {extended ? (
          <div className="location-box ml-4 mt-8">
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
        ) : null}
      </div>

      
    </>
  );
}

export default Sidebar;
