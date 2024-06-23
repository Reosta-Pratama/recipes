import React, { ReactNode } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface BtnAddProps{
    children: ReactNode;
    func?: () => void;
}

export const BtnAdd: React.FC<BtnAddProps> = ({children, func}) => {
  return (
    <button 
        type='button'
        onClick={func}
        className='w-[50px] 
        flex justify-center items-center 
        border-t last:border-b border-r border-solid border-[#dfdfdf]
        text-center text-base'>
        {children}
    </button>
  )
}

const AddCart = () => {
  return (
    <form 
        action="" 
        method="post"
        className='flex gap-4'>
        <div className="flex gap-5">
            <div className="flex">
                <input 
                    type="text" 
                    name="addCart" 
                    id="addCart" 
                    placeholder='0'
                    required
                    className='w-[50px] h-[50px]
                        flex justify-center items-center text-center
                        border border-solid border-[#dfdfdf]
                        text-black text-lg placeholder:text-black'/>
                
                <div className="grid grid-rows-2 text-black">
                    <BtnAdd>
                        <FiChevronUp></FiChevronUp>
                    </BtnAdd>

                    <BtnAdd>
                        <FiChevronDown></FiChevronDown>
                    </BtnAdd>
                </div>
            </div>

            <button 
                type="submit"
                className='bg-main w-[200px] h-[50px] 
                    duration-300 ease-in-out hover:bg-[#d3452e]'>
                    <span className='text-white text-xs font-semibold tracking-[2px] uppercase'>
                        add to cart
                    </span>
            </button>
        </div>
    </form>
  )
}

export default AddCart