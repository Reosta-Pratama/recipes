"use client"

import Profile from '@/components/AboutMe/Profile'
import Sosmed from '@/components/Contact/Sosmed'
import Popular from '@/components/Recipes/Popular'
import Workshop from '@/components/Recipes/Workshop'
import AddInfo from '@/components/Recipes/id/AddInfo'
import Info from '@/components/Recipes/id/Info'
import ListStep from '@/components/Recipes/id/ListStep'
import MovePage from '@/components/Recipes/id/MovePage'
import Rating from '@/components/Recipes/id/Rating'
import RelatedPost from '@/components/Recipes/id/RelatedPost'
import Tag from '@/components/Recipes/id/Tag'
import SideShare from '@/components/Share/SideShare'
import TitlePage from '@/components/Title/TitlePage'
import TitleSub from '@/components/Title/TitleSub'
import Image from 'next/legacy/image'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const Page = ({ params }: { params: { id: number } }) => {
    // Get Data
    const {data, error, isLoading} = useSWR('https://dummyjson.com/recipes/'+params.id, fetcher)
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

  return (
    <>
      <title>{`${data.name} - Masak`}</title>

      <section className='w-[1300px] max-w-[1300px] mx-auto pt-20'>
        <div className="relative flex gap-12">
          {/* Data Recipe */}
          <div className="flex flex-col flex-1 gap-12">
            <div className="flex flex-col">
              <div className="mb-10">
                <TitlePage name={data.name}></TitlePage>
              </div>

              <div className="relative w-full h-[500px] mb-5">
                  <Image
                      src={data.image}
                      alt={`Image ${data.name}`}
                      priority
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'>
                  </Image>
              </div>

              {/* Information */}
              <Info data={data}></Info>

              <p className='mb-10'>
                  Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor
                  inci didunt ut labore e dolore magnna ad aliquam. Ut enim ad minim. quis nostrud
                  exer citation ullamco laboris nisi ut aliquip ex ea commodo co nsequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
                  giat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in
                  culpa qui officia deser unt a mollit anim id est laborum. Lorem ipsum dolor sit
                  amet, consectetur adipicibe elit sed do eiusmo.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-5">
                  <TitleSub name='reviews:'></TitleSub>
                  <Rating rating={data.rating} reviewCount={data.reviewCount}></Rating>
              </div>
            </div>

            <span className='w-full block border border-solid border-[#eeedeb]'></span>

            {/* Ingredients */}
            <div className="flex flex-col gap-6">
              <TitleSub name='ingredients'></TitleSub>
              <ListStep data={data.ingredients}></ListStep>
            </div>

            {/* Directions */}
            <div className="flex flex-col gap-6">
              <TitleSub name='Directions'></TitleSub>
              <ListStep data={data.instructions}></ListStep>
            </div>

            {/* Additional Information */}
            <AddInfo></AddInfo>

            <div className="flex flex-col gap-6">
              {/* Tag */}
              <div className="flex items-center gap-5">
                  <TitleSub name='tags:'></TitleSub>
                  <Tag data={data.tags}></Tag>
              </div>
              
              {/* Share */}
              <div className="flex items-center gap-5">
                  <TitleSub name='share:'></TitleSub>
                  <Sosmed></Sosmed>
              </div>
            </div>

            {/* Prev Next */}
            <MovePage currentPage={data.id}></MovePage>

            {/* Related Post */}
            <RelatedPost currentItem={data.id} cuisine={data.cuisine}></RelatedPost>
          </div>

          {/* Aside */}
          <aside className="sticky top-10 w-1/3 h-fit 
            flex flex-col gap-16">
              <Profile></Profile>
              <Workshop></Workshop>
              <Popular></Popular>
              <SideShare></SideShare>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Page