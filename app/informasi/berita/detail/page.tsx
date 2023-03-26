import { doc3 } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import { BsCalendar2Date, BsFillEyeFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'

const page = () => {
  return (
    <>
    <div className='px-6 md:px-52 bg-red-50 h-auto w-full py-4'>
      <div className=''>
              <div className='pb-4'>
              <strong className='md:text-3xl text-xl'>Pelatihan dan workshop penerapan bundles Infeksi Aliran Darah (IAD) dan Penatalaksanaan Plebitis</strong>
            </div>
          <div className='flex justify-center w-full'>
              <Image src={doc3} alt='' className=' min-h-96 w-full aspect-auto object-cover'/>
          </div>
          <div className='flex flex-col py-4'>
            
          <div className='flex items-center space-x-4 pb-4'>
            <div className='flex items-center space-x-1 text-xs'>
            <BsCalendar2Date className=''/>
            <h5 className=" text-gray-400">03-Mar-2023 09:40:42</h5>
            </div>
            <div className='text-xs flex items-center space-x-1 text-gray-400'>
              <BsFillEyeFill/>
              <h5> 147 dilihat</h5>
            </div>
            <div className='text-xs flex items-center space-x-1 text-gray-400'>
              <FaUser/>
              <h5> Administrator</h5>
            </div>
        </div>
        <hr className=''></hr>
          </div>
      </div>
      <div className='space-y-4 text-justify indent-10 text-sm text-gray-500'>
        <p className=''>
        Healthcare Associated Infections (HAIs) atau infeksi sehubungan dengan perawatan kesehatan merupakan masalah serius tidak hanya terbatas di Rumah Sakit saja tetapi juga di semua fasilitas pelayanan kesehatan, khususnya Rumah Sakit Pusat Pertamina Jakarta.
        Menurut WHO angka kejadian infeksi di rumah sakit 3-21% (rata-rata 9%) akan menyebabkan peningkatan angka morbiditas, mortalitas, lama hari rawat dan peningkatan biaya rumah sakit. Kondisi ini menunjukkan penurunan mutu pelayanan kesehatan. 
        Tak dipungkiri lagi hal ini akan dapat menyebabkan tuntutan hukum sehingga pencegahan dan pengendalian infeksi di Rumah Sakit Pusat Pertamina Jakarta (RSPP) harus menjadi perhatian bagi semua tenaga kesehatan yang bekerja di RSPP.
        </p>
        <p className=''>
        Salah satu program kerja dari Komite PPI menurut PMK 27 tahun 2017 adalah pencegahan infeksi dengan pelaksanaan bundles HAIs. Bundles adalah kumpulan proses yang dibutuhkan untuk perawatan secara efektif dan aman untuk pasien dengan treatment tertentu dan memiliki risiko tinggi. 
        Beberapa intervensi di bundle bersama, dan ketika dikombinasikan dapat memperbaiki kondisi pasien secara signifikan. Bundles sangat berguna dan telah dikembangkan untuk IDO, VAP, ISK dan IADP.
        </p>
        <p>
        Sehubungan dengan hal tersebut diatas, perlu diadakan program pelatihan tentang tentang Pencegahan dan Pengendalian Infeksi yaitu penerapan bundles HAIs salah satunya bundles IAD (Infeksi Aliran Darah) dan penatalaksanaan Plebitis sehingga petugas yang sudah mendapatkan pelatihan dapat  meningkatkan kualitas mutu pelayanan yang aman bagi pasien, keluarga, petugas, pengunjung dan masyarakat di rumah sakit.
        </p>
        <p>
        Untuk itu Tim Pencegahan dan Pengendalian Infeksi Rumah Sakit Pusat Pertamina Jakarta bekerja sama dengan HC Training dan tim CICC keperawatan perlu untuk mengadakan Pelatihan dan Workshop sehari Bundles Infeksi Aliran Darah (IAD) dan penatalaksanaan plebitis.
        </p>
      </div>
    </div>
    </>
  )
}

export default page