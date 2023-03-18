import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const Detail = () => {
  return (
    <div className='flex justify-end px-8 items-center hover:cursor-pointer group w-full'>
          <span className='group-hover:text-blue-400'>Read More</span>
          <BsArrowRightShort className='group-hover:text-blue-400'/>
        </div>
  )
}

export default Detail