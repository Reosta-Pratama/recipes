import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'

const Email = () => {
  return (
    <form 
        action=""
        method='get'
        className='relative'>
        <input 
            type="text" 
            name="bookAds" 
            id="bookAds" 
            placeholder='Enter you email address here'
            required
            className='bg-transparent w-full py-3 pr-5
                border-b border-solid border-[#5e5e5e]
                text-[#595959] placeholder:text-[#595959] leading-[18px]'/>
        
        <div className="absolute z-10 top-1/2 right-0 -translate-y-1/2">
            <button className='flex justify-center items-center
                duration-300 ease-in-out hover:-translate-y-2'>
                <RiSendPlaneFill className='text-main text-2xl'/>
            </button>
        </div>
    </form>
  )
}

export default Email