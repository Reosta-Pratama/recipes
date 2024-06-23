import Profile from '@/components/AboutMe/Profile'
import Popular from '@/components/Recipes/Popular'
import Workshop from '@/components/Recipes/Workshop'
import SideShare from '@/components/Share/SideShare'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Me - Masak',
  description: '...',
}

const page = () => {
  return (
    <section className='w-[1300px] max-w-[1300px] mx-auto pt-20'>
      <div className="relative flex gap-12">
        {/* About Me */}
        <div className="flex flex-col flex-1 gap-12">
          about me
        </div>

        {/* Aside */}
        <aside className="sticky top-10 w-1/3 h-fit 
          flex flex-col gap-16">
            <Profile></Profile>
            <Workshop></Workshop>
            <Popular></Popular>
            <SideShare></SideShare>
        </aside>
      </div>
    </section>
  )
}

export default page