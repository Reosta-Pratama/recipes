import Image from 'next/legacy/image'
import React from 'react'
import ImgBook from '../../../public/assets/img/books.png'
import ImgLeaf from '../../../public/assets/img/leaf-2.svg'
import TitleSub2 from '../Title/TitleSub2'
import Email from './Email'

const Books = () => {
  return (
    <div className='bg-background bg-pattern bg-repeat-y bg-auto p-[10px]'>
        <div className="px-5 py-[42px]
            border border-solid border-main">
            <div className="flex">
                <div className="w-[14%] flex items-center">
                    <div className="relative w-full h-[150px]">
                        <Image
                            src={ImgLeaf}
                            alt={`Image ${ImgLeaf}`}
                            priority
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'>
                        </Image>
                    </div>
                </div>

                <div className="w-[31%]">
                    <div className="relative w-full h-[250px]">
                        <Image
                            src={ImgBook}
                            alt={`Image ${ImgBook}`}
                            priority
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'>
                        </Image>
                    </div>
                </div>

                <div className="flex flex-col flex-1 gap-6 pl-[5%]">
                    <div className="mt-6">
                        <TitleSub2 name='My new book is out. Enjoy every meal!'></TitleSub2>
                    </div>

                    <Email></Email>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Books