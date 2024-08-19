import React, { useCallback, useContext, useState } from 'react'
import { RiChat4Fill, RiChat4Line , RiMore2Fill, RiMore2Line } from "@remixicon/react";

import {Context} from '../Context/Context'

function Task({
    icon,
    text = "this is auto",
    active = false,
}) {

  const {onSent} = useContext(Context)
  return (
    <li 
    onClick={() => onSent(text)}
    className='flex gap-4 p-2 pl-3  items-center mb-0 mr-2 mt-1 justify-start hover:bg-zinc-800 hover:text-white cursor-pointer rounded-full font-Raleway'>
        {icon? <img src={icon} alt={icon} className='w-5'/> : <RiChat4Line className='text-zinc-300' size={15}/>}
        <div className=' w-48'>

        <p className=' text-zinc-300  text-sm font-heebo overflow-x-hidden '>{text.slice(0,26)}...</p>
        </div>
        <RiMore2Fill  size={15} className='font-bold  text-zinc-300'/>
    </li>
  )
}

export default Task