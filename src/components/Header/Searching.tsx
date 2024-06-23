"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import BtnRound from '../Button/BtnRound'

const Searching = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (query.trim()) {
      router.push(`/recipes?search=${query}`)
    }
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit} method='get'>
        <div className='flex gap-4'>
            <input
                type="text"
                name="searchRecipes"
                id="searchRecipes"
                placeholder='Search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                className='bg-transparent w-[240px] 
                    border-b border-solid border-[#5e5e5e]
                    text-[#686868] placeholder:text-[#686868]' />

            <BtnRound type='submit'>
                <FiSearch />
            </BtnRound>
        </div>
    </form>
  )
}

export default Searching
