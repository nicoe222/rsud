import Image from 'next/image'
import React from 'react'
import {doc1,doc2,doc3} from '../public/assets';
const Dokter = () => {
  return (
    <div className='bg-gray-50/80 dark:bg-slate-800/80 w-full'>
      <div className='flex justify-center'>
        <h1 className='py-4 text-3xl leading-7 tracking-widest font-bold text-judul'>Dokter Kami</h1>
      </div>
      
      <div className='px-8 md:px-24 py-8 grid md:grid-cols-3 gap-4'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer bg-white dark:bg-slate-800">
  <Image className="w-full" src={doc1} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">dr. Bayu Prabowo, Sp. A</div>
    <p className="text-gray-700 text-base dark:text-gray-50">
    Spesialis Anak 
    </p>
  </div>
  
</div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer bg-white dark:bg-slate-800">
  <Image className="w-full" src={doc2} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">dr. Norman Hadi, Sp.B</div>
    <p className="text-gray-700 text-base dark:text-gray-50">Spesialis Bedah Umum</p>
  </div>
  
</div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer bg-white dark:bg-slate-800">
  <Image className="w-full" src={doc3} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">dr. Ari Sardito, Sp.B</div>
    <p className="text-gray-700 text-base dark:text-gray-50">Spesialis Bedah Umum</p>
  </div>
  
</div>
      </div>
      </div>
  )
}

export default Dokter