"use client"

import React from 'react'
import useSWR from 'swr'
import Image from 'next/legacy/image'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const SideShare = () => {
    // Get Data
    const {data, error, isLoading} = useSWR('https://dummyjson.com/recipes?limit=6&sortBy=reviewCount&order=asc', fetcher)
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

    return (
        <ul className='grid grid-cols-3 gap-4'>
            {
                data?.recipes?.map((item: any) => {
                    return(
                        <li key={item.id}
                            className='relative block h-24'>
                            <Image
                                src={item.image}
                                alt={`share ${item.name}`}
                                priority
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                className='scale-110
                                    duration-1000 ease-[cubic-bezier(.22,.54,.04,.98)] 
                                    hover:translate-x-1'>
                            </Image>                                       
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SideShare