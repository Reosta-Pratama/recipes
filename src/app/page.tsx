import Carousel from '@/components/Carousel/Carousel'
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
    </>
  )
}

export default page