import Carousel from '@/components/Carousel/Carousel'
import Recipes from '@/components/Recipes/Recipes'
import Share from '@/components/Share/Share'
import Shop from '@/components/Shop/Shop'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Home',
  description: '...',
}

const page = () => {
  return (
    <>
      <Carousel></Carousel>

      <div className="w-[1300px] max-w-[1300px] mx-auto">
        <Recipes></Recipes>
        <Shop></Shop>
        <Share></Share>
      </div>
    </>
  )
}

export default page