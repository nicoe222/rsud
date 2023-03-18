import { motherhope } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const page = () => {
  return (
    <>
     <div className='md:px-24 px-8'>

     <div className='flex justify-center'>
        <h1 className='py-4 text-3xl leading-7 tracking-widest font-bold text-judul'>Gallery</h1>
      </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 pt-4'>
        <div className=" bg-white border border-gray-200 rounded-lg shadow w-auto">
            <Image src={motherhope} alt='' className='h-auto w-auto aspect-auto'/>
            <div className="">
                <div className='p-5'>
                 <h5 className="mb-2 text-2xl font-poppins tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </div>
        <hr className='w-full'></hr>
        <div className='flex justify-end'>
        <Link href="">
          <div className='flex items-center py-2 px-4 space-x-2'>

          <span>Read More</span>
          <BsArrowRight className=''/>
          </div>
        </Link>
        </div>
    </div>
</div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow w-auto">
            <Image src={motherhope} alt='' className='h-auto w-auto aspect-auto'/>
            <div className="">
                <div className='p-5'>
                 <h5 className="mb-2 text-2xl font-poppins tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </div>
        <hr className='w-full'></hr>
        <div className='flex justify-end'>
        <Link href="">
          <div className='flex items-center py-2 px-4 space-x-2'>

          <span>Read More</span>
          <BsArrowRight className=''/>
          </div>
        </Link>
        </div>
    </div>
</div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow w-auto ">
            <Image src={motherhope} alt='' className='h-auto w-auto aspect-auto'/>
            <div className="">
                <div className='p-5'>
                 <h5 className=" font-poppins mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </div>
        <hr className='w-full'></hr>
        <div className='flex justify-end'>
        <Link href="">
          <div className='flex items-center py-2 px-4 space-x-2'>

          <span>Read More</span>
          <BsArrowRight className=''/>
          </div>
        </Link>
        </div>
    </div>
</div>

        </div>
     </div> 
    </>
  )
}

export default page