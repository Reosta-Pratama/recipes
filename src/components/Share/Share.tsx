"use client"

import React from 'react'
import useSWR from 'swr'
import Image from 'next/legacy/image'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const Shop = () => {
    // Get Data
    const {data, error, isLoading} = useSWR('https://dummyjson.com/recipes?limit=6&sortBy=name&order=asc', fetcher)
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

    return (
        <section className='flex flex-col gap-5 py-24'>
            <div className="flex justify-center">
                <div className='w-[416px] flex justify-center text-center'>
                    <h3 className='text-black text-xl font-medium font-ebGaramond italic'>
                        Share Your Meals on Instagram with 
                        <span className='ml-1 text-main'>#plumaward </span>
                        & We Will Reward the Meal of the Month! 
                    </h3>
                </div>
            </div>

            <ul className='grid grid-cols-6 gap-[10px]'>
                    {
                        data?.recipes?.map((item: any) => {
                            return(
                                <li key={item.id}
                                    className='relative block h-52'>
                                    <Image
                                        src={item.image}
                                        alt={`share ${item.name}`}
                                        priority
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center'
                                        className='scale-105
                                            duration-1000 ease-[cubic-bezier(.22,.54,.04,.98)] 
                                            hover:translate-x-1'>
                                    </Image>                                       
                                </li>
                            )
                        })
                    }
                </ul>
        </section>
    )
}

export default Shop