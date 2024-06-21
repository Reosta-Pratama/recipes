import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react'

interface CardProps{
    data: any;
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
        <div className='flex flex-col gap-4'>
            <div
                className='group relative block h-[220px]'>
                <Link
                    href={`shop/${data.id}`}
                    className='relative block h-full'>
                    <Image
                        src={data.image}
                        alt={`recipes ${data.name}`}
                        priority
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'>
                    </Image>  
                </Link>

                <Link
                    href={'/'}
                    className='bg-[#d3452e] absolute z-10
                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        h-[49px] flex justify-center items-center px-[49px]
                        duration-300 ease-in-out
                        opacity-0
                        group-hover:opacity-100'>
                    <span className='text-white text-xs font-semibold tracking-[2px] uppercase'>
                        buy
                    </span>
                </Link>                                  
            </div>

            <div className="flex flex-col text-center gap-2">
                <Link href={`shop/${data.id}`}>
                    <h2 className='text-black text-xl font-medium font-ebGaramond
                        duration-300 ease-in-out
                        hover:text-[#505050]'>{data.name}</h2>
                </Link>
                <span>Rp10.000</span>
            </div>
        </div>
  )
}

export default Card