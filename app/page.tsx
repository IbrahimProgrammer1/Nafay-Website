import Ad from '@/components/Ad'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Product from '@/components/Product'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Header/>
      <Ad/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default page