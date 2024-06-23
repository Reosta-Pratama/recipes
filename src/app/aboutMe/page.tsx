import Profile from '@/components/AboutMe/Profile'
import Popular from '@/components/Recipes/Popular'
import Workshop from '@/components/Recipes/Workshop'
import SideShare from '@/components/Share/SideShare'
import { Metadata } from 'next'
import Image from 'next/legacy/image'
import React from 'react'
import ChefImg from '../../../public/assets/img/chef.jpg'
import TitlePage from '@/components/Title/TitlePage'
import TitleSub from '@/components/Title/TitleSub'
import Sosmed from '@/components/Contact/Sosmed'
import Books from '@/components/AboutMe/Books'
import TitleSub2 from '@/components/Title/TitleSub2'

export const metadata: Metadata = {
  title: 'About Me - Masak',
  description: '...',
}

const page = () => {
  return (
    <section className='w-[1300px] max-w-[1300px] mx-auto pt-20'>
      <div className="relative flex gap-12">
        {/* About Me */}
        <div className="flex flex-col flex-1 gap-12">
          <div className="flex flex-col">
            <div className="mb-10">
              <TitlePage addClass='italic' name='Hello, I am Maggy. Welcome to recipes blog and food heaven!'></TitlePage>
            </div>

            <div className="relative w-full h-[500px] mb-5">
                <Image
                    src={ChefImg}
                    alt={`Image ${ChefImg}`}
                    priority
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'>
                </Image>
            </div>

            {/* Description 1 */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor
                inci didunt ut labore e dolore magnna ad aliquam. Ut enim ad minim. quis nostrud
                exer citation ullamco laboris nisi ut aliquip ex ea commodo co nsequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
                giat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in
                culpa qui officia deser unt a mollit anim id est laborum. Lorem ipsum dolor sit
                amet, consectetur adipicibe elit sed do eiusmo.
            </p>
          </div>

            {/* Description 2 */}
            <div className="flex flex-col gap-5">
              <TitleSub2 name='Where I find inspiration'></TitleSub2>

              <p>
                  Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor
                  inci didunt ut labore e dolore magnna ad aliquam. Ut enim ad minim. quis nostrud
                  exer citation ullamco laboris nisi ut aliquip ex ea commodo co nsequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
                  giat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in
                  culpa qui officia deser unt a mollit anim id est laborum. Lorem ipsum dolor sit
                  amet, consectetur adipicibe elit sed do eiusmo.
              </p>

              <p>
                  Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor
                  inci didunt ut labore e dolore magnna ad aliquam. Ut enim ad minim. quis nostrud
                  exer citation ullamco laboris nisi ut aliquip ex ea commodo co nsequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
                  giat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in
                  culpa qui officia deser unt a mollit anim id est laborum. Lorem ipsum dolor sit
                  amet, consectetur adipicibe elit sed do eiusmo.
              </p>
              
              <p>
                – Dolor sed viverra ipsum nunc alique
                <br />
                – Nec tincidunt semper Neque Ornare, aenean euismod
                <br />
                – Pellentesque massa placerat
              </p>
            </div>

            {/* Books */}
            <Books></Books>
            
            {/* Description 3 */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor
                inci didunt ut labore e dolore magnna ad aliquam. Ut enim ad minim. quis nostrud
                exer citation ullamco laboris nisi ut aliquip ex ea commodo co nsequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
                giat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in
                culpa qui officia deser unt a mollit anim id est laborum. Lorem ipsum dolor sit
                amet, consectetur adipicibe elit sed do eiusmo.
            </p>

            {/* Share */}
            <div className="flex items-center gap-5">
                <TitleSub name='follow me:'></TitleSub>
                <Sosmed></Sosmed>
            </div>
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
  )
}

export default page