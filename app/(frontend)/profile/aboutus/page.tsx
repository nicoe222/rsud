"use client"

import React from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const page = () => {
  return (
    <>
    <div className=''>
      
    </div>
    <div className='md:px-16'>
    <Tab.Group>
      <Tab.List className='flex space-x-8 w-full border-b-[1px] border-gray-100 text-lg text-gray-700'>
        <Tab className={({selected}) => classNames(
          'font-medium leading-5 outline-none px-4 py-2.5 md:text-base text-xs',
          'ring-white ring-opacity-60 ring-offset-2 focus:outline-none outline-none',
          selected
            ? 'border-b-[2px] border-b-blue-500 text-gray-600'
            : ' text-gray-400 outline-none'
        )}>Sambutan Direktur</Tab>
        <Tab className={({selected}) => classNames(
          'font-medium leading-5 outline-none px-4 py-2.5 md:text-base text-xs',
          'ring-white ring-opacity-60 ring-offset-2 focus:outline-none outline-none',
          selected
            ? 'border-b-[2px] border-b-blue-500 text-gray-600'
            : ' text-gray-400 outline-none'
        )}>Sejarah</Tab>
        <Tab className={({selected}) => classNames(
          'font-medium leading-5 outline-none px-4 py-2.5 md:text-base text-xs',
          'ring-white ring-opacity-60 ring-offset-2 focus:outline-none outline-none',
          selected
            ? 'border-b-[2px] border-b-blue-500 text-gray-600'
            : ' text-gray-400 outline-none'
        )}>Visi & Misi</Tab>
      </Tab.List>
      <Tab.Panels className='px-4 md:px-0'>
        <Tab.Panel className='py-8'>
          <div className='space-y-4'>
            <div className='space-y-2 text-sm'>
              <p className=''>Berdiri sejak tanggal 6 Januari 1972, Rumah Sakit Pusat Pertamina (RSPP) merupakan Unit terbesar dari PT. 
                Pertamedika IHC. Di usia emasnya, RSPP terus bergerak mengembangkan diri untuk memenuhi kebutuhan kesehatan masyarakat, baik preventif, kuratif, rehabilitative dan pasca rawat atau home health care. 
                Didukung tenaga kesehatan yang kompeten dan handal serta peralatan medis yang mutakhir, RSPP mengedepankan ketulusan dalam memberikan pelayanan kesehatan kepada pelanggan. RSPP mendorong masyarakat untuk peduli kesehatannya saat tidak sakit, antara lain dengan melakukan medical check up secara berkala untuk mengetahui status kesehatan. 
                Tidak hanya itu, RSPP menyediakan pelayanan rawat jalan dan rawat inap bahkan pelayanan pasca rawat yaitu perawatan di rumah atau home health care. 
                RSPP memiliki pelayanan unggulan antara lain perawatan luka bakar terbaik di Indonesia, Cathlab 24 jam untuk penanganan serangan jantung, Kamar Rawat Ablasi untuk terapi Iodium, dan Laboratorium berstandar Internasional. 
                Sebagai bagian dari masyarakat, RSPP terus membangun komunikasi dengan masyarakat dengan memberikan edukasi kesehatan secara offline maupun melalui platform akun social media Facebook, Instagram dan Youtube RS Pusat Pertamina. Bersama Pemerintah dan masyarakat, RSPP berkomitmen meningkatkan derajat kesehatan masyarakat untuk mendukung generasi penerus bangsa yang sehat dan produktif.</p>
            </div>

          </div>
          
          </Tab.Panel>
        <Tab.Panel className='py-8'>
          <div className='space-y-4'>
            <div className='space-y-2'>

            <h1 className='text-lg font-poppins font-semibold'>Sejarah RSUD SLG KEDIRI</h1>
            <p className='text-sm'>Sejarah pembangunan tahap I UOBK RSUD Simpang Lima Gumul Kediri dimulai pada tahun 2016 dan tahap II pada tahun 2017. 
              RSUD baru ini berlokasi di Desa Tugurejo - Kec. Ngasem, Kabupaten Kediri. 
              Awal mula kepemilikan tanah untuk pendirian UOBK RSUD Simpang Lima Gumul Kediri adalah tanah milik perseorangan kemudian menjadi milik pemerintahan Kabupaten Kediri. 
              UOBK RSUD Simpang Lima Gumul Kediri menempati lahan seluas 75.504 m2 dengan luas bangunan 22.469 m2.</p>
            </div>
            <div className='space-y-2'>

            <h1 className='text-lg font-poppins font-semibold'>Aspek Legal</h1>
            <p className='text-sm'>UOBK RSUD Simpang Lima Gumul Kediri adalah rumah sakit tipe C milik Pemerintah Kabupaten Kediri berdasarkan pada Peraturan Bupati Kediri Nomor 6 Tahun 2021 tentang Pembentukan Unit Organisasi Bersifat Khusus Rumah Sakit Umum Daerah Simpang Lima Gumul pada Dinas Kesehatan Kabupaten Kediri. 
            UOBK RSUD Simpang Lima Gumul Kediri dipimpin oleh seorang Direktur berbentuk Unit Pelaksana Teknis Daerah (UOBK) yang berada di bawah dan bertanggung jawab kepada Dinas Kesehatan Kabupaten Kediri. 
            Sifat bisnis adalah sosio ekonomi dan lebih menekankan pada pelayanan sosial kepada masyarakat termasuk masyarakat tidak mampu dengan mengutamakan mutu dan keselamatan pasien.</p>
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel className='py-8'>
          <div className='space-y-4'>
            <div className='space-y-2'>
            <strong className='uppercase text-lg tracking-widest'>Visi</strong>
            <p className='text-sm'>Menjadi rumah sakit pilihan utama masyarakat dengan pelayanan kesehatan yang berkualitas serta mendukung pendidikan, penelitian dan pengabdian masyarakat.</p>
            </div>
            <div className='space-y-2'>
            <strong className='uppercase text-lg tracking-widest'>Misi</strong>
            <ul className='list-decimal list-inside text-sm'>
              <li>Menyelenggarakan pelayanan kesehatan paripurna bagi seluruh lapisan masyarakat yang berorientasi kepada mutu dan keselamatan pasien</li>
              <li>Membangun sumber daya manusia rumah sakit yang profesional sesuai standar diiringi integritas dalam pelayanan</li>
              <li>Mendorong pengembangan ilmu dan teknologi kesehatan serta layanan unggulan rumah sakit</li>
              <li>Mengembangkan pendidikan, pelatihan, penelitian dan pengabdian yang terintegrasi untuk meningkatkan mutu pelayanan</li>
              <li>Menyelenggarakan kegiatan manajemen rumah sakit secara profesional, efektif dan efisien untuk meningkatkan kemandirian rumah sakit dan kesejahteraan karyawan</li>
            </ul>
            </div>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
    </>
  )
}

export default page