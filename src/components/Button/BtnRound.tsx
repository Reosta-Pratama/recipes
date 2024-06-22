import React, { ReactNode } from 'react'

interface BtnRoundProps{
    type: "button" | "submit";
    children: ReactNode;
    onClick?: () => void;
}

const BtnRound: React.FC<BtnRoundProps> = ({type, children, onClick}) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className='group bg-main 
            w-[30px] h-[30px] 
            border border-solid border-transparent rounded-full
            flex justify-center items-center
            duration-200 ease-in-out
            hover:bg-transparent hover:border-main'>
            <span className='text-white
                duration-200 ease-in-out
                group-hover:text-main'>
                {children}
            </span>
    </button>
  )
}

export default BtnRound