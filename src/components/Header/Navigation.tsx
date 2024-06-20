import Link from 'next/link';
import React from 'react'

interface NavigationProps {
    nav?: Array<Array<string>> | null;
}

const Navigation: React.FC<NavigationProps> = ({nav}) => {
  return (
    <nav>
        <ul className='flex gap-2'>
            {
                nav?.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item[0]}>
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