import FilterProduct from '@/app/components/FilterProduct'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <FilterProduct />
      <Footer />
    </>
  )
}

export default page
