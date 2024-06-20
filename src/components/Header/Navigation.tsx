import Link from 'next/link';
import React from 'react'

interface NavigationProps {
    nav?: Array<Array<string>> | null;
}

const Navigation: React.FC<NavigationProps> = ({nav}) => {
  return (
    <nav>
        <ul className='flex gap-[50px]'>
            {
                nav?.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item[0]}
                                className='text-black text-xs tracking-[2px] font-semibold uppercase
                                    duration-200 ease-in-out
                                    hover:text-main'>
                                {item[1]}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default Navigation