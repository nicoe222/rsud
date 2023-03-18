import { doc2 } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs'

const page = () => {
  return (
    <>
    <div className='md:px-24 px-8'>
    <div className='flex justify-center'>
        <h1 className='py-4 text-3xl leading-7 tracking-widest font-bold text-judul font-poppins'>Berita</h1>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 pt-4 gap-4'>

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight  text-white z-10 absolute bg-blue-400'>Berita</p>
        <Image className="rounded-t-lg" src={doc2} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400 font-poppins">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>Pelatihan dan workshop penerapan bundles Infeksi Aliran Darah (IAD) dan Penatalaksanaan Plebitis</p>
        </div>
    </div>
</div>
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight text-white z-10 absolute bg-blue-400'>Berita</p>
        <Image className="rounded-t-lg" src={doc2} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>Pelatihan dan workshop penerapan bundles Infeksi Aliran Darah (IAD) dan Penatalaksanaan Plebitis</p>
        </div>
    </div>
</div>
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight text-white z-10 absolute bg-blue-400'>Berita</p>
        <Image className="rounded-t-lg" src={doc2} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>Pelatihan dan workshop penerapan bundles Infeksi Aliran Darah (IAD) dan Penatalaksanaan Plebitis</p>
        </div>
    </div>
</div>

      </div>
      
      </div>
    </>
  )
}

export default page