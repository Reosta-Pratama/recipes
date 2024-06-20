"use client"

import React from 'react'
import TitleSection from '../Title/TitleSection'
import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/legacy/image'
import BtnMenu from '../Button/BtnMenu'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const Recipes = () => {
    // Get Data
    const {data, error, isLoading} = useSWR('https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc', fetcher)
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

    return (
        <section className='flex flex-col gap-5 pt-32'>
            <TitleSection name='Recipes for true foodies'></TitleSection>

            {/* List Recipe */}
            <div className="grid grid-cols-3 gap-5">
                {
                    data?.recipes?.map((item: any) => {
                       return(
                        <article key={item.id}>
                            <Link
                                href={`recipes/${item.id}`}
                                className='relative block h-[470px]'>
                                    <Image
                                        src={item.image}
                                        alt={`recipes ${item.name}`}
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
                                            <span className='text-main text-xs tracking-[.3em] font-semibold uppercase'>{item.cuisine}</span>
                                            <h2 className='text-black text-2xl font-ebGaramond font-medium'>{item.name}</h2>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                       ) 
                    })
                }
            </div>

            {/* View All */}
            <div className="flex justify-center pt-4">
                <BtnMenu name='view all' link='recipes'></BtnMenu>
            </div>
        </section>
    )
}

export default Recipes