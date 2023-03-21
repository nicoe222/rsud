import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook,BsInstagram,BsYoutube,BsWhatsapp } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { logo } from '../public/assets'


const Footer = () => {
  return (
    
<footer className="p-4 bg-white sm:p-6">
<hr className="my-6 border-gray-100 sm:mx-auto lg:my-8" />
    <div className="md:flex md:justify-between" >
        <div className="flex flex-col space-y-2 mb-4 md:mb-0">
            <div>
            <Image src={logo} alt="Logo" className='md:h-10 h-8 aspect-auto w-auto'/>
            </div>
          <div className='flex flex-col md:text-base text-sm'>
            <span className='font-poppins font-medium'>Alamat</span>
            <p>JL. Galuh Candra Kirana Ds. Tugurejo Kec. Ngasem</p>
           
          </div>
          <div className='flex flex-col md:text-base text-sm'>
            <span className='font-poppins font-medium'>WhatsApp / Nomer Telphone</span>
            <p className=''>(0813)-2600-0404 / (0354) 2891400</p>
           
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 px-4">
            <div className=''>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Profile</h2>
                <ul className="text-gray-600 flex flex-col space-y-1">
                    <li className="">
                        <Link href="/profile/aboutus" className="hover:underline">Tentang Kami</Link>
                    </li>
                    <li>
                        <Link href="/profile/mutu" className="hover:underline">Mutu Layanan</Link>
                    </li>
                    <li>
                        <Link href="/profile/organisasi" className="hover:underline">Struktur Organisasi</Link>
                    </li>
                        
                </ul>
            </div>
            <div>
            <div className=''>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Layanan</h2>
                <ul className="text-gray-600 flex flex-col space-y-1">
                    <li className="">
                        <Link href="/layanan/rawat-inap" className="hover:underline">Rawat Inap</Link>
                    </li>
                    <li>
                        <Link href="/layanan/rawat-jalan" className="hover:underline">Rawat Jalan</Link>
                    </li>
                    <li>
                        <Link href="/layanan/igd" className="hover:underline">Layanan IGD</Link>
                    </li>
                        <li>
                            <Link href="/layanan/intensif" className="hover:underline">Layanan Intensif</Link>
                        </li>
                </ul>
            </div>
            </div>
            <div>
            <div className=''>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Informasi</h2>
                <ul className="text-gray-600 flex flex-col space-y-1">
                    <li className="">
                        <Link href="/informasi/berita" className="hover:underline">Berita</Link>
                    </li>
                    <li>
                        <Link href="/informasi/artikel" className="hover:underline">Artikel</Link>
                    </li>
                    <li>
                        <Link href="/informasi/gallery" className="hover:underline">Gallery</Link>
                    </li>
                        <li>
                            <Link href="/informasi/pengumuman" className="hover:underline">Pengumuman</Link>
                        </li>
                </ul>
            </div>
            </div>
        </div>
    </div>

    <hr className="md:my-6 my-3 border-gray-100 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between px-4">
        <span className="md:text-sm text-xs text-gray-500 sm:text-center">© 2023 
        <a href="/" className="hover:underline"> RSUD Simpang Lima Gumul Kediri</a>
        <strong>. All Rights Reserved.</strong>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <Link href="" className='text-gray-500 hover:text-gray-900'> 
<FaTwitter className='w-4 h-4'/>
</Link>
<Link href="" className='text-gray-500 hover:text-gray-900'> 
<BsFacebook className='w-4 h-4'/>
</Link>
<Link href="" className='text-gray-500 hover:text-gray-900'> 
<BsInstagram className='w-4 h-4'/>
</Link>
<Link href="" className='text-gray-500 hover:text-gray-900'> 
<BsYoutube className='w-4 h-4'/>
</Link>
<Link href="" className='text-gray-500 hover:text-gray-900'> 
<BsWhatsapp className='w-4 h-4'/>
</Link>
        </div>
    </div>
</footer>

  )
}

export default Footer