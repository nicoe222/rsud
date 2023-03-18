import React from 'react'
import Berita from '../components/Berita'
import Dokter from '../components/Dokter'
import Hero from '../components/Hero'

const page = () => {
  return (
    <div>
        <Hero/>
        <Dokter/>
        <Berita/>
        </div>
  )
}

export default page