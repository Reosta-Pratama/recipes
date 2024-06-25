import React from 'react'

interface BtnOrangeProps{
    type: "button" | "submit";
    name: string;
}

const BtnOrange: React.FC<BtnOrangeProps> = ({type, name}) => {
  return (
    <button
        type={type}
        className={`bg-main w-[200px] h-[50px]    
            duration-300 ease-in-out hover:bg-[#d3452e]`}>
        <span className="text-white text-xs font-semibold tracking-[2px] uppercase">
            {name}
        </span>
    </button>
  )
}

export default BtnOrange