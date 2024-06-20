"use client"

import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useSWR from 'swr'
import Image from 'next/legacy/image'
import Link from 'next/link'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      slides: {
        origin: "center",
        perView: 2,
        spacing: 20,
      },
      loop: true
    })

    // Get Data
    const { data, error, isLoading } = useSWR('https://dummyjson.com/recipes?limit=5', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
  return (
    <>
        <div className="navigation-wrapper relative h-[488px]">
            <div ref={sliderRef} 
                className="keen-slider h-full">
                {
                    data?.recipes?.map((item: any) => {
                        return(
                            <article
                                key={item.id}
                                className="keen-slider__slide">
                                    <Link 
                                        href={`recipes/${item.id}`}
                                        className='relative w-full h-full block'>
                                        <Image
                                            src={item.image}
                                            alt={`Carousel image ${item.name}`}
                                            priority
                                            layout='fill'
                                            objectFit='cover'
                                            objectPosition='center'
                                            className='scale-105
                                                duration-1000 ease-[cubic-bezier(.22,.54,.04,.98)] 
                                                hover:translate-x-1'>
                                        </Image>

                                        <div id='labelCarousel'
                                            className={`${currentSlide == item.id-1 ? "opacity-100" : "opacity-0"}
                                            absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                            w-[566px] transition-all duration-300 ease-in-out
                                            hover:-translate-y-[52%]`}>
                                            <div className="bg-white w-full px-[12%] py-[35px]
                                                flex flex-col text-center gap-1">
                                                <span className='text-main text-xs tracking-[.3em] font-semibold uppercase'>{item.cuisine}</span>
                                                <h2 className='text-black text-3xl font-ebGaramond font-medium'>{item.name}</h2>
                                            </div>
                                        </div>
                                    </Link>
                            </article>
                        )
                    })
                }
            </div>
            
            {
                loaded && instanceRef.current && (
                <>
                    <Arrow
                        left
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                    />

                    <Arrow
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                    />
                </>
                )
            }
        </div>
    </>
  )
}

function Arrow(props: {
    left?: boolean
    onClick: (e: any) => void
  }) {
    return (
        <button
            onClick={props.onClick}
            className={`group absolute top-1/2 -translate-y-1/2
                ${props.left && ('left-0')}
                ${!props.left && ('right-0')}
                bg-white w-10 h-[45px] flex justify-center items-center`}>
            <span className='text-black text-3xl duration-200 ease-in-out hover:text-main'>
                {props.left && (
                    <FiChevronLeft />
                )} 
                
                {!props.left && (
                    <FiChevronRight />
                )}
            </span>
        </button>
    )
  } 

export default Carousel