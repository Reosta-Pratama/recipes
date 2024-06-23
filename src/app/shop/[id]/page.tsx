"use client"

import Sosmed from '@/components/Contact/Sosmed'
import AddCart from '@/components/Shop/id/AddCart'
import Info from '@/components/Shop/id/Info'
import RelatedPost from '@/components/Shop/id/RelatedPost'
import TitlePage from '@/components/Title/TitlePage'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const page = ({ params }: { params: { id: number } }) => {
    // Get Data
    const {data, error, isLoading} = useSWR('https://dummyjson.com/recipes/'+params.id, fetcher)
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

    const tagsText = data.tags.length > 1 ? data.tags.join(' - ') : data.tags[0];
  return (
    <>
      <title>{`${data.name} - Masak`}</title>

      <section className="w-[1300px] max-w-[1300px] mx-auto pt-20">
        <div className="relative flex flex-col gap-20">
            {/* Head */}
            <div className="grid grid-cols-2 gap-10">
              {/* Image */}
              <div className=""></div>

              {/* Info */}
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-2">
                  <TitlePage name={data.name}></TitlePage>
                  <span className='text-lg font-medium'>Rp10.000</span>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in isus ut facilisis rutrum ad sea.
                </p>

                {/* Add to Cart */}
                <AddCart></AddCart>
                
                {/* List Info */}
                <ul className='flex flex-col gap-1'>
                  <li className='flex items-center gap-2'>
                    <span>SKU:</span>
                    <span>{`0${data.id}`}</span>
                  </li>

                  <li className='flex items-center gap-2'>
                    <span>Category:</span>
                    <span>{data.cuisine}</span>
                  </li>

                  <li className='flex items-center gap-2'>
                    <span>Tags:</span>
                    <span>{tagsText}</span>
                  </li>

                  <li className='flex items-center gap-2'>
                    <span>Share:</span>
                    <Sosmed></Sosmed>
                  </li>
                </ul> 
              </div>
            </div>

            {/* Additional Info */}
            <Info></Info>

            {/* Related Post */}
            <RelatedPost currentItem={data.id} cuisine={data.cuisine}></RelatedPost>
        </div>
      </section>
    </>
  )
}

export default page