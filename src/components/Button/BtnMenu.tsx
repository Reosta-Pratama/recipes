import Link from 'next/link';
import React from 'react'

interface BtnMenuProps{
    name: string;
    link: string;
}

const BtnMenu: React.FC<BtnMenuProps> = ({name, link}) => {
  return (
    <Link 
        href={link}
        className='group bg-transparent px-12 py-[10px]
            border border-solid border-black
            duration-300 ease-in-out
            hover:bg-black'>
        <span className='text-black text-xs font-semibold tracking-[2px] uppercase
            duration-300 ease-in-out
            group-hover:text-white'>
            {name}
        </span>
    </Link>
  )
}

export default BtnMenu