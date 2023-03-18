'use client'

import React, { useState, useEffect, Fragment } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {logo} from '../public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Menu,Transition } from '@headlessui/react';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';
import { ChevronUpDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navbarDrop, setnavbarDrop] = useState(false);


    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(()=>{
        const handleNavbar = () => {
          if (window.scrollY > 1){
            setnavbarDrop(true)
          } else {
            setnavbarDrop(false)
          }
        };
        window.addEventListener('scroll',handleNavbar);
    },[]);

  return (
    <>
    <div className='font-poppins font-normal'>
        <div className={navbarDrop? `hidden`: 'bg-blue-800 hidden md:flex py-3 w-full'}>
            <div className='px-10 flex items-center'>
                <div className='flex space-x-4'> 

            <p className='text-white text-sm tracking-tight font-poppins'>
            Call Center : 0800 1280 9000
            </p>
            <p className='text-white text-sm tracking-tight font-poppins'>
            Call Center : 0800 1280 9000
            </p>
                </div>  
            </div>
        </div>

    </div>
    
<nav className={navbarDrop? `px-5 sm:px-10 bg-white border-gray-200 fixed z-20 w-full top-0 ease-in-out duration-1000 delay-300 shadow-sm` : 'px-5 sm:px-10 bg-white border-gray-200 w-full top-[-100%] ease-in-out duration-1000 delay-300' }>
  <div className="flex flex-wrap items-center justify-between mx-auto">
    <Link href='#' className="flex items-center py-5">
        <Image src={logo} alt='Logo' className='h-8 w-auto sm:h-10'/>
    </Link>
    

    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row 
      md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
       md:bg-white ">
        <Link href="#"><li className="text-blue-700 uppercase text-sm tracking-tighter font-poppins">Home</li></Link>
        
         <Menu as="div" className="">
         {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex w-full justify-center text-sm tracking-tighter font-poppins uppercase">
                Profile
              {open ? (
                  <ChevronUpIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-violet-100"
              aria-hidden="true"
            />
              ) : (
                <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-violet-100"
              aria-hidden="true"
            />
              )}
                
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className ="absolute z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  focus:outline-none">
                <div className='p-1'>
                <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/profile/aboutus"> 
                    Tentang Kami
                    </Link> 
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >

                    <Link href="/profile/mutu">
                    Mutu Layanan
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/profile/organisasi">
                    Struktur Organisasi
                    </Link>
                  </button>
                )}
              </Menu.Item>
              
                </div>
              </Menu.Items>
            </Transition>
          </>
            )}
         </Menu>



         <Menu as="div" className="">
            <div>
              <Menu.Button className="inline-flex w-full justify-center text-sm tracking-tighter font-poppins uppercase">
                Layanan
                <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-violet-100"
              aria-hidden="true"
            />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className ="absolute z-50 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-blue-50 shadow-lg  focus:outline-none">
                <div className='p-1'>
                <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/layanan/rawat-jalan"> 
                    Rawat Jalan
                    </Link> 
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >

                    <Link href="/layanan/rawat-inap">
                    Rawat Inap
                    </Link>
                  </button>
                )}
              </Menu.Item>
          
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/layanan/igd">
                    Layanan IGD
                    </Link>
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/layanan/penunjang">
                    Layanan Penunjang
                    </Link>
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/layanan/intensif">
                    Layanan Intensif
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/layanan/diklat">
                    Pendidikan dan Pelatihan (DIKLAT)
                    </Link>
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/layanan/promosi">
                    Promosi Kesehatan
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/layanan/fasilitas">
                    Fasilitas Umum
                    </Link>
                  </button>
                )}
              </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
         </Menu>
        

         <Menu as="div" className="">
            <div>
              <Menu.Button className="inline-flex w-full justify-center text-sm tracking-tighter font-poppins uppercase">
                Informasi

                <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-violet-100"
              aria-hidden="true"
            />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className ="absolute z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  focus:outline-none">
                <div className='p-1'>
                <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/informasi/berita"> 
                    Berita
                    </Link> 
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >

                    <Link href="/informasi/artikel">
                    Artikel
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/informasi/gallery">
                    Gallery
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/informasi/video">
                    Video
                    </Link>
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href="/informasi/pengumuman">
                    Pengumuman
                    </Link>
                  </button>
                )}
              </Menu.Item>
              
                </div>
              </Menu.Items>
            </Transition>
         </Menu>

        <Link href="kontak"><li className="text-gray-700 uppercase text-sm tracking-tighter font-poppins">Kontak Kami</li></Link>
        
      </ul>
    </div>
    <div 
    className='md:hidden' 
    onClick={handleNav}>
    <AiOutlineMenu size={25} />
    </div>
  </div>
</nav>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50' : ''}>
        <div className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>

<div>
            <div className='flex w-full items-center justify-between'>
             <div>

             </div>
              <div
                onClick={handleNav}
                className='cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            
          </div>

        <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Tentang Kami
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Layanan
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Informasi
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Kontak Kami
                </li>
              </Link>
             
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
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

export default Navbar