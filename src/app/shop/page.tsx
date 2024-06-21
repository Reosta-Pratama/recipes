import TitlePage from '@/components/Title/TitlePage'
import {Metadata} from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Shop',
    description: '...'
}

const page = () => {
    return (
      <section className='w-[1300px] max-w-[1300px] mx-auto'>
        <div className="flex gap-6">
          {/* Filtering */}
          <div className='w-1/4 flex flex-col gap-16'></div>

          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-2">
              
            </div>
          </div>
        </div>
      </section>
  )
}

export default page