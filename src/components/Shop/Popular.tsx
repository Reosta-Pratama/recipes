import TitleSide from '@/components/Title/TitleSide'
import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const Popular = () => {
    // Get Data
    const {data, error, isLoading} = useSWR('https://dummyjson.com/recipes?limit=2&sortBy=rating&order=asc', fetcher)
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

  return (
    <div className='flex flex-col gap-5'>
        <TitleSide name='Popular Product' fontSize='text-2xl'></TitleSide>

        <ul className='flex flex-col gap-5'>
        {
            data?.recipes?.map((item: any) => {
            return(
                <li key={item.id}
                  className='grid grid-cols-2 items-center gap-7'>
                    <div
                        className='group relative block h-[130px]'>
                        <Link
                            href={`/shop/${item.id}`}
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
                    </div>

                    <div className="flex flex-col gap-2">
                        <Link href={`/shop/${item.id}`}>
                            <h2 className='text-black text-xl font-medium font-ebGaramond
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
    </div>
  )
}

export default Popular