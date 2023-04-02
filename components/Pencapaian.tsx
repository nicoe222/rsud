import React from 'react'

const Pencapaian = () => {
  return (
    <div className='bg-blue-600'>
        <div className='px-8 md:px-24'>
                <div className='py-14'>
                    <div className='grid grid-cols-2 md:grid-cols-4 justify-center'>
                        <div className='w-full flex flex-col justify-center cursor-pointer hover:ease-in-out hover:bg-blue-100/25 hover:delay-300 hover:duration-300 py-8 space-y-4 text-white font-semibold text-center'>
                            <span className='text-4xl'>
                                5 Tahun
                            </span>
                            <span className='text-xl'>
                                Melayani Anda
                            </span>
                        </div>
                        <div className='w-full flex flex-col justify-center cursor-pointer hover:ease-in-out hover:bg-blue-100/25 hover:delay-300 hover:duration-300 py-8 space-y-4 text-white font-semibold text-center'>
                            <span className='text-4xl'>
                                30
                            </span>
                            <span className='text-xl'>
                                Penghargaan
                            </span>
                        </div>
                        <div className='w-full flex flex-col justify-center cursor-pointer hover:ease-in-out hover:bg-blue-100/25 hover:delay-300 hover:duration-300 py-8 space-y-4 text-white font-semibold text-center'>
                            <span className='text-4xl'>
                                146
                            </span>
                            <span className='text-xl'>
                                Dokter
                            </span>
                        </div>
                        <div className='w-full flex flex-col justify-center cursor-pointer hover:ease-in-out hover:bg-blue-100/25 hover:delay-300 hover:duration-300 py-8 space-y-4 text-white font-semibold text-center'>
                            <span className='text-4xl'>
                                700
                            </span>
                            <span className='text-xl'>
                                Kunjungan / Hari
                            </span>
                        </div>
                        
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Pencapaian