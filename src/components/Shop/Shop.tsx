"use client"

import React from 'react'
import TitleSection from '../Title/TitleSection'
import useSWR from 'swr'
import BtnMenu from '../Button/BtnMenu'
import Card from './Card'

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
                            <li key={item.id}>
                                <Card data={item} imgSize='h-[220px]'></Card>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Recipes