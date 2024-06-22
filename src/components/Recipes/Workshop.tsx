import Link from 'next/link'
import React from 'react'
import ImgRendang from '../../../public/assets/img/rendang.jpg'
import Image from 'next/legacy/image'

const Workshop = () => {
  return (
    <Link
        href={'/recipes'}
        className='group relative'>
        <div className="relative w-full h-52">
            <Image
                src={ImgRendang}
                alt='Rendang image'
                priority
                layout='fill'
                objectFit='cover'
                objectPosition='center'>
            </Image>
        </div>

        <div className="absolute z-10 bottom-4 left-0">
            <div className="bg-white w-fit px-10 py-2
                duration-300 ease-in-out group-hover:px-8">
                <h2 className='text-main text-3xl font-medium font-dancingScript'>
                    Workshop
                </h2>
            </div>
        </div>
    </Link>
  )
}

export default Workshop