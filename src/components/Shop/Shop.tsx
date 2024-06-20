"use client"

import React, {useState} from 'react'
import TitleSection from '../Title/TitleSection'
import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/legacy/image'
import BtnMenu from '../Button/BtnMenu'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const Recipes = () => {
    // Get Data
    const {data, error, isLoading} = useSWR('https://dummyjson.com/recipes?limit=4&sortBy=name&order=desc', fetcher)
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

    return (
        <section className='grid grid-cols-3 items-center pt-[140px]'>
            <div className="flex flex-col gap-9 pr-[18%]">
                <TitleSection name='Our unique toppings, spices and homemade produce'></TitleSection>
                
                {/* View More */}
                <div className='flex'>
                    <BtnMenu name='shop now' link='shop'></BtnMenu>
                </div>
            </div>

            {/* List Shop */}
            <ul className="col-span-2 grid grid-cols-4 gap-[30px]">
                {
                    data?.recipes?.map((item: any) => {
                        return(
                            <li key={item.id}
                                className='flex flex-col gap-4'>
                                <div
                                    className='group relative block h-[220px]'>
                                    <Link
                                        href={`shop/${item.id}`}
                                        className='relative block h-full'>
                                        <Image
                                            src={item.image}
                                            alt={`recipes ${item.name}`}
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
                                    <Link href={`shop/${item.id}`}>
                                        <h2 className='text-black text-2xl font-medium font-ebGaramond
                                            duration-300 ease-in-out
                                            hover:text-[#505050]'>{item.name}</h2>
                                    </Link>
                                    <span>Rp10.000</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Recipes