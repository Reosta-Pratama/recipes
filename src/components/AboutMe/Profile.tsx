import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import ImgChef from '../../../public/assets/img/chef.jpg'
import Sosmed from '../Contact/Sosmed'
import ImgLeaf from '../../../public/assets/img/leaf.svg'

const Profile = () => {
  return (
    <div className='flex flex-col gap-7'>
        <div className='flex flex-col'>
            <Link
                href={'/aboutMe'}
                className='flex flex-col mb-4'>
                <div 
                    className="relative flex justify-center mb-5">
                    <div
                        className='block w-[150px] h-[150px] rounded-full overflow-hidden'>
                        <Image
                            src={ImgChef}
                            alt='Profile image'
                            width={100}
                            height={100}
                            priority
                            layout='responsive'
                            objectFit='cover'
                            objectPosition='center'
                            className='scale-105
                                duration-1000 ease-[cubic-bezier(.22,.54,.04,.98)] 
                                hover:translate-x-1'>
                        </Image>
                    </div>

                    <div className="absolute -z-10 -top-10 right-[20%]">
                        <div className="w-[110px] h-[214px]">
                            <Image
                                src={ImgLeaf}
                                alt='Leaf image'
                                priority
                                layout='responsive'
                                objectFit='contain'>
                            </Image>
                        </div>
                    </div>
                </div>

                <h3 className='text-black text-2xl text-center 
                    font-medium font-ebGaramond italic
                    duration-200 ease-in-out hover:text-main'>
                    I’m Jessica, your new guide.
                    Welcome to my Cookbook!
                </h3>
            </Link>

            <p className='text-center'>
                Lorem ipsum dolor sit amet, ad consectetur adi picibe elit, sed do eiusmod
                tempor inci didunt quo labore e dolore magna aliqua ut.
            </p>
        </div>

        <Sosmed></Sosmed>
    </div>
  )
}

export default Profile