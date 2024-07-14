"use client"

import Paginate from '@/components/Paginate/Paginate'
import Card from '@/components/Recipes/Card'
import Filtering from '@/components/Recipes/Filtering'
import Popular from '@/components/Recipes/Popular'
import Sorting from '@/components/Recipes/Sorting'
import SideShare from '@/components/Share/SideShare'
import { RemoveFilter, filterItems, useSearchQuery } from '@/helpers/Search'
import React, { useState, Suspense } from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Page: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 8

    return (
        <>
            <title>Recipe - Masak</title>

            <section className='w-[1300px] max-w-[1300px] mx-auto pt-20'>
                <div className="relative flex gap-12">
                    {/* Filtering & Popular */}
                    <aside className='sticky top-0 w-1/4 h-fit flex flex-col gap-16'>
                        <Filtering />
                        <Popular />
                        <SideShare />
                    </aside>

                    {/* Sorting & Data Product */}
                    <div className="flex flex-1 flex-col gap-14">
                        <Suspense fallback={<div>loading search query...</div>}>
                            <SearchResults 
                                currentPage={currentPage} 
                                setCurrentPage={setCurrentPage} 
                                itemsPerPage={itemsPerPage} 
                                fetcher={fetcher} 
                            />
                        </Suspense>
                    </div>
                </div>
            </section>
        </>
    )
}

interface SearchResultsProps {
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    itemsPerPage: number
    fetcher: (url: string) => Promise<any>
}

const SearchResults: React.FC<SearchResultsProps> = ({ currentPage, setCurrentPage, itemsPerPage, fetcher }) => {
    const search = useSearchQuery()

    // Get Data
    const { data, error, isLoading } = useSWR('https://dummyjson.com/recipes', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // Filter Searching
    const filteredItems = filterItems(data?.recipes || [], search)

    const totalItems = filteredItems.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    // Calculate items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
    const currentItems = filteredItems.slice(startIndex, endIndex)

    // Handle sorting option change
    const handleSortChange = (option: React.SetStateAction<string>) => {
        setCurrentPage(1)
    }

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="relative z-20 flex justify-between items-center py-[10px]">
                    {/* Remove Filter */}
                    <Suspense fallback={<div>loading remove filter...</div>}>
                        <RemoveFilter />
                    </Suspense>

                    {/* Count item */}
                    <p>Showing {startIndex + 1}–{endIndex} of {totalItems} results</p>

                    {/* Sorting */}
                    <Sorting
                        option={[
                            ["default", "Default sorting"],
                            ["name-asc", "Sort by A-Z"],
                            ["name-desc", "Sort by Z-A"],
                        ]}
                        onchange={() => handleSortChange}>
                    </Sorting>
                </div>

                {/* List Shop */}
                <ul className="col-span-2 grid grid-cols-2 gap-[30px]">
                    {
                        currentItems.map((item: any) => {
                            return (
                                <li key={item.id}>
                                    <Card data={item} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* Pagination Controls */}
            <Paginate currentPage={currentPage} totalPages={totalPages} func={handlePageChange} />
        </>
    )
}

export default Page
