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
        <div className="navigation-wrapper h-[488px] border border-solid border-black">
            <div ref={sliderRef} 
                className="keen-slider h-full">
                {
                    data?.recipes?.map((item: any, index: React.Key) => {
                        return(
                            <article
                                key={index}
                                className="keen-slider__slide">
                                    <Link 
                                        href={''}
                                        className='group relative w-full h-full block'>
                                        <Image
                                            src={item.image}
                                            alt={`Carousel image ${item.name}`}
                                            width={100} 
                                            height={100}
                                            priority
                                            layout='fill'
                                            objectFit='cover'
                                            objectPosition='center'>
                                        </Image>
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
                        disabled={currentSlide === 0}
                    />

                    <Arrow
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
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
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    return (
        <button
            onClick={props.onClick}>
            {props.left && (
                <FiChevronLeft />
            )} 
            
            {!props.left && (
                <FiChevronRight />
            )}
        </button>
    )
  } 

export default Carousel