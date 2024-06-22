import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import TitleSide from '../Title/TitleSide'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Filtering = () => {
    // Get Products
    const { data: products, error: errorProducts, isLoading: loadProducts } = useSWR('https://dummyjson.com/recipes', fetcher)
    // Get Tags
    const { data: tagsData, error: errorTags, isLoading: loadTags } = useSWR('https://dummyjson.com/recipes/tags', fetcher)

    if (errorProducts || errorTags) return <div>Failed to load</div>
    if (loadProducts || loadTags) return <div>Loading...</div>

    const allProducts = products?.recipes || []

    // Count occurrences of each tag in allProducts
    const tagCounts = allProducts.reduce((acc: {[key: string]: number}, product: any) => {
      product.tags.forEach((tag: string) => {
          if (acc[tag]) {
              acc[tag] += 1
          } else {
              acc[tag] = 1
          }
      })
      return acc
    }, {})

    // Sort tags by count and take the top 20
    const sortedTags = Object.keys(tagCounts)
      .sort((a, b) => tagCounts[b] - tagCounts[a])
      .slice(0, 20)
    return (
        <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-5'>
                <TitleSide name='Filter by Tags'></TitleSide>
                <ul className='grid grid-rows-10 grid-flow-col gap-1'>
                    {sortedTags.map((item: any, index: React.Key) => (
                        <li key={index}>
                            <Link
                              href={''}
                              className='duration-200 ease-in-out hover:text-main'>
                              {item} ({tagCounts[item]})
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filtering
