import Books from '@/components/AboutMe/Books'
import Profile from '@/components/AboutMe/Profile'
import Faq from '@/components/Contact/Faq'
import Popular from '@/components/Recipes/Popular'
import Workshop from '@/components/Recipes/Workshop'
import SideShare from '@/components/Share/SideShare'
import TitlePage from '@/components/Title/TitlePage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us - Masak',
  description: '...',
}

const page = () => {
  return (
    <section className='w-[1300px] max-w-[1300px] mx-auto pt-20'>
      <div className="relative flex gap-12">
        {/* About Me */}
        <div className="flex flex-col flex-1 gap-12">
          <div className="flex flex-col gap-5">
            <TitlePage  name='Did you try my recipe?'></TitlePage>

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

            <p>
                Elit solet eu has, in has paulo debitis recteque. Cu pri apeirian vituperata,
                justo nostro inermis sit an. Qui zril contentiones ne, sanctus probatus
                ullamcorper eam at.
            </p>
            
            <div className="flex items-center gap-1">
              <span>Email:</span>
              <a href="mailto:reosta.pane@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-black duration-200 ease-linear hover:text-main'>
                  reosta.pane@gmail.com
              </a>
            </div>
          </div>

          {/* Information */}
          <Books></Books>
          <Faq></Faq>
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