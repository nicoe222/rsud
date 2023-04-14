import { doc2 } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='px-48 py-8'>
        <div className='w-full flex flex-col space-y-4'>
        <div className='w-full flex space-x-4'>

        <div className='w-1/3'>
            <Image src={doc2} alt=''/>
        </div>

        <div className='w-2/3 '>
        
        <div className='flex flex-col space-y-2 mb-4'>
            <span className='text-judul font-semibold text-3xl'>dr. Rr. Fika Tiara Wahyu W, Sp.S</span>
            <span className='text-xs text-gray-500'>Dilihat : 995</span>
            <hr></hr>
        </div>
        
        <div className="relative">
    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='w-full'>
                <th className="w-1/3">
                    Hari
                </th>
                <th className="py-2 w-2/3">
                    Waktu
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Senin
                </th>
                <td className="py-1">
                   -
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Selasa
                </th>
                <td className="py-1">
                    -
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Rabu
                </th>
                <td className="py-1">
                    -
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kamis
                </th>
                <td className="py-1">
                13.00-15.00 WIB
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Jum'at
                </th>
                <td className="py-1">
                    -
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sabtu
                </th>
                <td className="py-1">
                    13.00-15.00 WIB
                </td>
                
            </tr>
            
        </tbody>
    </table>
        </div>


        </div>

        </div>
        <div className='text-gray-500 text-[10px]'>
            <p>* Jadwal Dokter dapat berubah sewaktu-waktu. Informasi lebih lanjut dapat menghubungi Call Center di +62217219000 atau lakukan Reservasi Online</p>
        </div>

        <div>
            
    <div className="relative">
    <table className="w-96 text-sm text-gray-500 dark:text-gray-400 py-6">
        <tbody className=''>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
                <th className=" font-semibold text-judul text-base dark:text-white text-left pb-6">
                    Spesialis
                </th>
                <td className="pb-6">
                    :
                </td>
                <td className="px-6 pb-6">
                    Penyakit Saraf
                </td>
                
            </tr>
            <tr className=" dark:bg-gray-800 dark:border-gray-700 py-6">
                <th className=" font-semibold text-judul dark:text-white text-left text-base">
                    Klinik
                </th>
                <td className="">
                    :
                </td>
                <td className="px-6">
                    Saraf
                </td>
                
            </tr>
        </tbody>
    </table>
    
    </div>

        </div>
        </div>
    
    
    </div>
    

    </>
  )
}

export default page