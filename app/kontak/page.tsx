import React from 'react'
import { BsSendFill } from 'react-icons/bs'

const page = () => {
  return (
    <>
    
    <div className='flex md:space-x-4 flex-col md:flex-row md:px-24 px-8'>
      <div className='w-full md:w-1/2 '>
          <div className='w-full'>
            <div className='mt-4 mb-4 md:mb-6'>
              <h1 className='text-black font-semibold text-lg'>FORM UMPAN BALIK</h1>
              <p className='text-sm text-gray-800'>Untuk mengirim umpan balik, silahkan lengkapi form isian di bawah ini lalu klik submit untuk mengirim.</p>
            </div>
          <form>
    <div className="grid gap-6 mb-2 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-normal text-gray-900">First name</label>
            <input type="text" id="first_name" 
            className="border border-gray-100 text-gray-900 text-xs rounded-lg 
            focus:ring-blue-500 focus:ring-0 block w-full p-2" required/>
        </div>
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-normal text-gray-900">First name</label>
            <input type="text" id="first_name" 
            className="border border-gray-100 text-gray-900 text-xs rounded-lg 
            focus:ring-blue-500 focus:ring-0 block w-full p-2" required/>
        </div> 
    </div>
    <div className="mb-2">
        <label htmlFor="email" className="block mb-2 text-sm font-normal text-gray-900">Email address</label>
        <input type="email" id="email" 
        className="border border-gray-100 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:text-xs" 
        placeholder="john.doe@company.com" required/>
    </div> 
    <div className='mb-2'>
    <label htmlFor="first_name" className="block mb-2 text-sm font-normal text-gray-900">Subject</label>
            <input type="text" id="first_name" 
            className="border border-gray-100 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:ring-0 block w-full p-2 sm:text-xs" required/>
    </div>
    <div className="mb-2">
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
<textarea id="message" rows={3} className="block resize-y p-2 w-full text-sm sm:text-xs text-gray-900 rounded-lg border border-gray-100 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-100 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required/>
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-6 py-2 text-center">
      <div className='flex items-center space-x-2'>
      <BsSendFill className='h-3 w-3'/>
      <p>Submit</p>
      </div>
      
      </button>
</form>
          </div>
      </div>

      <div className='md:w-1/2 w-full'>
        <div className='w-full'>

      <div className='mt-4 mb-4 md:mb-6 space-y-4'>
        <div className='w-full'>
              <h1 className='text-black font-semibold md:text-lg'>INFORMASI</h1>
              <div className='flex flex-col space-y-2'>
              <div className='flex flex-row'>
              <p className='text-gray-800'>Call Center : </p>
              <p className='text-blue-600'>&nbsp; (0354) 2891400 </p>
              </div>
              <div className='flex flex-row'>
              <p className='text-gray-800'>WhatsApp : </p>
              <p className='text-blue-600'>&nbsp; (0813)-2600-0404 </p>
              </div>
              <div className='flex flex-row'>
              <p className='text-gray-800'>Customer Care : </p>
              <p className='text-gray-800'>&nbsp; rsudslg.kediri@gmail.com</p>
              </div>
              </div>
        </div>

        <div className='w-full'>
              <h1 className='text-black font-semibold text-base md:text-lg'>Jam Operasional</h1>
              <div className='flex flex-col space-y-2'>
              <div className='flex flex-row'>
              <p className='text-gray-800'>Senin - Jumat pukul 08.00 - 16.00 WIB</p>
              </div>
              </div>
        </div>
        <div className='w-full'>
              <h1 className='text-black font-semibold text-base md:text-lg'>Loket Pendaftaran Rawat Jalan</h1>
              <div className='flex flex-col space-y-2'>
              <div className='flex flex-col'>
              <p className='text-gray-800'>Senin - Minggu pukul 07.15 - 12.00 WIB</p>
              <p className='text-gray-800'>Jum'at pukul 07.15 - 10.00 WIB</p>
              </div>
              </div>
        </div>
        <div className='w-full'>
              <h1 className='text-black font-semibold text-base md:text-lg'>Loket Pendaftaran IGD</h1>
              <div className='flex flex-col space-y-2'>
              <div className='flex flex-row'>
              <p className='text-gray-800'>Senin - Minggu pukul 00.00 - 24.00 WIB</p>
              </div>
              </div>
        </div>
        <div className='w-full'>
              <h1 className='text-black font-semibold text-base md:text-lg'>Alamat</h1>
              <div className='flex flex-col w-full'>
              <p className='text-gray-800'>JL. Galuh Candra Kirana Ds. Tugurejo Kec. Ngasem</p>
              </div>
        </div>
            </div>
        </div>
      </div>
      


    </div>
    </>
  )
}

export default page