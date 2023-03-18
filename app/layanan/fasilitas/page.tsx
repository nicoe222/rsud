import React from 'react'
import Image from 'next/image'
import { atm, auditorium, masjid } from '../../../public/assets'

const page = () => {
  return (
    <>
    <div className='md:px-24 px-8'>
    <div className='flex justify-center py-8'>
        <h1 className='py-4 text-3xl leading-7 tracking-widest font-bold text-judul'>FASILITAS UMUM</h1>
      </div>
      <div className='space-y-4'>
      <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <Image className="h-48 p-4 w-auto object-cover aspect-video" src={auditorium} alt=""/>
            <div className=" p-4 space-y-2">
            <h5 className="text-2xl font-semibold text-judul">Rawat Inap</h5>
            <p className="font-normal text-gray-700">
            Auditorium yang kami miliki berkapasitas kurang lebih 500 orang.
            </p>
        </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <Image className="h-48 p-4 w-auto object-cover aspect-video" src={masjid} alt=""/>
            <div className=" p-4 space-y-2">
            <h5 className="text-2xl font-semibold text-judul">Masjid</h5>
            <p className="font-normal text-gray-700">
            Bagi Anda yang beragama Islam, kami menyediakan masjid yang dapat menampung lebih dari 100 orang.
            </p>
        </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <Image className="h-48 p-4 w-auto object-cover aspect-video" src={atm} alt=""/>
            <div className=" p-4 space-y-2">
            <h5 className="text-2xl font-semibold text-judul">Gerai ATM</h5>
            <p className="font-normal text-gray-700">
            Kami menyediakan fasilitas ATM untuk Anda dalam pengambilan uang tunai. Total 6 ATM bank terkemuka Kami sediakan untuk kemudahan Anda.
            </p>
        </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default page