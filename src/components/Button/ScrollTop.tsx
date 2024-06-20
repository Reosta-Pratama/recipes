import React from 'react'
import { FiChevronUp } from 'react-icons/fi'

const ScrollTop = () => {
  return (
    <div className={`opacity-100 fixed z-20 bottom-12 right-12
        duration-300 ease-in-out`}>
        <button
            type='button'
            className='group bg-main w-10 h-10
                flex justify-center items-center
                border border-solid border-main
                duration-300 ease-in-out
                hover:bg-transparent'>
                <span className='text-white text-lg
                    duration-300 ease-in-out
                    group-hover:text-main'>
                    <FiChevronUp />
                </span>
        </button>
    </div>
  )
}

export default ScrollTop