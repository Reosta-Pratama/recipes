import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react'

interface CardProps {
    data: any;
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
        <Link
            href={`/recipes/${data.id}`}
            className='relative block h-[470px]'>
                <Image
                    src={data.image}
                    alt={`recipes ${data.name}`}
                    priority
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='scale-105
                        duration-1000 ease-[cubic-bezier(.22,.54,.04,.98)] 
                        hover:translate-x-1'>
                </Image>

                <div id='labelCarousel'
                    className='absolute z-10 
                    bottom-3 left-1/2 -translate-x-1/2
                    w-[calc(100%-20px)] transition-all duration-300 ease-in-out
                    hover:-translate-y-[10px]'>
                    <div className="bg-white w-full px-[10%] py-[30px]
                        flex flex-col text-left gap-1">
                        <span className='text-main text-xs tracking-[.3em] font-semibold uppercase'>{data.cuisine}</span>
                        <h2 className='text-black text-2xl font-ebGaramond font-medium'>{data.name}</h2>
                    </div>
                </div>
        </Link>
  )
}

export default Card