import Detail from '@/components/Detail'
import { baby, handfoot, karang, migrain, miokard, sinus } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs'

const page = () => {
  return (
    <>
    <div className='md:px-24 px-8'>
        <div>
    <div className='flex justify-center space-y-8'>
        <h1 className='py-4 text-3xl leading-7 tracking-widest font-bold text-judul font-poppins'>Artikel Kesehatan</h1>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>

      <div className="w-full  bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight  text-white z-10 absolute bg-blue-400'>Artikel</p>
        <Image className="rounded-t-lg min-h-[280px] w-auto aspect-auto" src={miokard} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
    <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>
            Apa itu Sidik Perfusi Miokard ?</p>
        </div>
        <hr></hr>
        <Detail/>
    </div>
</div>
<div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight text-white z-10 absolute bg-blue-400'>Artikel</p>
        <Image className="rounded-t-lg min-h-[280px] w-auto aspect-auto" src={baby} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>
            Penting kah skrining pendengaran untuk bayi baru lahir ?</p>
        </div>
        <hr></hr>
        <Detail/>
    </div>
</div>

<div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight text-white z-10 absolute bg-blue-400'>Artikel</p>
        <Image className="rounded-t-lg min-h-[280px] w-auto aspect-auto" src={karang} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>
            Apa penyebab Karang Gigi ?</p>
        </div>
        <hr></hr>
        <Detail/>
    </div>
</div>

<div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight text-white z-10 absolute bg-blue-400'>Artikel</p>
        <Image className="rounded-t-lg min-h-[280px] w-auto aspect-auto" src={handfoot} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>
            Hand Foot and Mouth Disease</p>
        </div>
        <hr></hr>
        <Detail/>
    </div>
</div>

<div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight text-white z-10 absolute bg-blue-400'>Artikel</p>
        <Image className="rounded-t-lg min-h-[280px] w-auto aspect-auto" src={migrain} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>
            Kenali Pemicu Migrain</p>
        </div>
        <hr></hr>
        <Detail/>
    </div>
</div>

<div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base font-extralight text-white z-10 absolute bg-blue-400'>Artikel</p>
        <Image className="rounded-t-lg min-h-[280px] w-auto aspect-auto" src={sinus} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>
            Apa itu Sinusitis ?</p>
        </div>
        <hr></hr>
        <Detail/>
    </div>
</div>

      </div>
        </div>

      
      </div>
    </>
  )
}

export default page