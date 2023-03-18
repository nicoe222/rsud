import Image from 'next/image'
import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs'
import { doc2 } from '../public/assets'


const Berita = () => {
  return (
    <div className='bg-white w-full'>
        <div className='px-8 md:px-24 py-8 grid md:grid-cols-3 gap-4'>    
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base md:text-lg font-bold text-white z-10 absolute bg-blue-400'>Artikel</p>
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
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base md:text-lg font-bold text-white z-10 absolute bg-blue-400'>Artikel</p>
        <Image className="rounded-t-lg" src={doc2} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>Peresmian 3 Fasilitas baru Radioterapi , Medical Check Up One Stop service & Dental Care</p>
        </div>
    </div>
</div>

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <div>
        <p className='flex px-3 m-3 py-[1px] rounded-md text-base md:text-lg font-bold text-white z-10 absolute bg-blue-400'>Artikel</p>
        <Image className="rounded-t-lg" src={doc2} alt="product image" />
    </div>
    <div className="px-5 pb-5 space-y-3">
        <div className='flex items-center space-x-1 mt-4'>
            <BsCalendar2Date className='text-xs'/>
            <h5 className="text-xs font-semibold tracking-tight text-gray-400">03-Mar-2023 09:40:42</h5>
        </div>
        
        <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
            <p className='text-xl'>HARI PELANGGAN NASIONAL 2022 - RSUD Simpang Lima Gumul berkomitmen tingkatkan kualitas layanan</p>
        </div>
    </div>
</div>

        </div>
    </div>
  )
}

export default Berita