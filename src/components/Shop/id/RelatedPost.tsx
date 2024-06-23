"use client"

import TitleSide from '@/components/Title/TitleSide'
import React from 'react'
import useSWR from 'swr';
import { useShuffleArray } from '@/helpers/Shuffle';
import Card from '../Card';

interface RelatedPostProps {
    currentItem: number;
    cuisine: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
}

const RelatedPost: React.FC<RelatedPostProps> = ({ currentItem, cuisine }) => {
    // Get Data
    const { data, error, isLoading } = useSWR('https://dummyjson.com/recipes/', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // Filter and Shuffle Posts
    const filteredPosts = data.recipes.filter((recipe: any) => 
        recipe.cuisine.toLowerCase() === cuisine.toLowerCase() && recipe.id !== currentItem
    )
    const relatedPosts = shuffleArray(filteredPosts).slice(0, 4)
    
    // Check if relatedPosts is empty or null
    if (!relatedPosts || relatedPosts.length === 0) {
        return null; 
    }

    return (
        <div className="flex flex-col gap-6 mt-8">
            <TitleSide name='Try this also' fontSize='text-4xl'></TitleSide>

            {/* List Shop */}
            <ul className="col-span-2 grid grid-cols-4 gap-[30px]">
                {
                    relatedPosts.map((item: any) => (
                        <li key={item.id}>
                            <Card data={item} imgSize='h-[340px]'></Card>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RelatedPost
