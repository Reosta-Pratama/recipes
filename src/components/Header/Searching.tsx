import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Searching = () => {
  return (
    <form 
        action=""
        method='get'>
        <div className='flex gap-4'>
            <input type="text" 
                name="searchRecipes" 
                id="searchRecipes" 
                placeholder='Search'
                required
                className='bg-transparent w-[240px] border-b border-solid border-[#5e5e5e]
                    text-[#686868]'/>

            <button
                type='submit'
                className='group bg-main w-[30px] h-[30px] rounded-full
                    border border-solid border-transparent
                    flex justify-center items-center
                    duration-200 ease-in-out
                    hover:bg-transparent hover:border-main'>
                    <span className='text-white
                        duration-200 ease-in-out
                        group-hover:text-main'>
                        <FiSearch />
                    </span>
            </button>
        </div>
    </form>
  )
}

export default Searching